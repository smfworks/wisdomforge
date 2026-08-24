"use client";

import { useSyncExternalStore } from "react";
import type { BandId } from "@/lib/curriculum/types";

type ForgeState = {
  band: BandId | null;
  setBand: (band: BandId) => void;
  completed: string[];
  complete: (key: string) => void;
  uncomplete: (key: string) => void;
  isDone: (key: string) => boolean;
  lastKey: string | null;
  setLast: (key: string) => void;
};

const STORAGE_KEY = "wisdomforge-family";

type InternalState = {
  band: BandId | null;
  completed: string[];
  lastKey: string | null;
};

function loadState(): InternalState {
  if (typeof window === "undefined") {
    return { band: null, completed: [], lastKey: null };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { band: null, completed: [], lastKey: null };
    const parsed = JSON.parse(raw);
    return {
      band: parsed.band ?? null,
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      lastKey: parsed.lastKey ?? null,
    };
  } catch {
    return { band: null, completed: [], lastKey: null };
  }
}

// Module-level mutable store state (outside React render cycle)
let _state: InternalState = { band: null, completed: [], lastKey: null };
let _initialized = false;
const _listeners = new Set<() => void>();

function _ensureInit() {
  if (_initialized) return;
  _initialized = true;
  _state = loadState();
  if (typeof window !== "undefined") {
    window.addEventListener("storage", (e) => {
      if (e.key === STORAGE_KEY) {
        _state = loadState();
        _listeners.forEach((l) => l());
      }
    });
  }
}

function _save() {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(_state));
  _listeners.forEach((l) => l());
}

function _subscribe(cb: () => void) {
  _ensureInit();
  _listeners.add(cb);
  return () => {
    _listeners.delete(cb);
  };
}

function _getSnapshot(): InternalState {
  return _state;
}

function _getServerSnapshot(): InternalState {
  return { band: null, completed: [], lastKey: null };
}

// Actions operate on module-level store, not during render
function _setBand(band: BandId) {
  _state = { ..._state, band };
  _save();
}

function _complete(key: string) {
  if (_state.completed.includes(key)) return;
  _state = { ..._state, completed: [..._state.completed, key], lastKey: key };
  _save();
}

function _uncomplete(key: string) {
  _state = { ..._state, completed: _state.completed.filter((k) => k !== key) };
  _save();
}

function _isDone(key: string) {
  return _state.completed.includes(key);
}

function _setLast(key: string) {
  _state = { ..._state, lastKey: key };
  _save();
}

export function useForge<T>(selector: (s: ForgeState) => T): T {
  _ensureInit();
  const s = useSyncExternalStore(_subscribe, _getSnapshot, _getServerSnapshot);

  const forgeState: ForgeState = {
    band: s.band,
    completed: s.completed,
    lastKey: s.lastKey,
    setBand: _setBand,
    complete: _complete,
    uncomplete: _uncomplete,
    isDone: _isDone,
    setLast: _setLast,
  };

  return selector(forgeState);
}