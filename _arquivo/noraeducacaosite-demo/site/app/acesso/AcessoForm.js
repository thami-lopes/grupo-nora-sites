"use client";

import { useState } from "react";
import styles from "./acesso.module.css";

export default function AcessoForm({ next }) {
  const [senha, setSenha] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/acesso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senha, next }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Não foi possível entrar.");
        setStatus("error");
        return;
      }
      window.location.href = data.next || "/";
    } catch {
      setError("Falha de conexão. Tente novamente.");
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor="acesso-senha" className={styles.label}>
        Senha
      </label>
      <input
        id="acesso-senha"
        type="password"
        required
        autoFocus
        autoComplete="current-password"
        placeholder="••••••••"
        className={styles.input}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button type="submit" className={styles.submit} disabled={status === "sending"}>
        {status === "sending" ? "Entrando…" : "Entrar"}
      </button>
      {status === "error" && <p className={styles.error}>{error}</p>}
    </form>
  );
}
