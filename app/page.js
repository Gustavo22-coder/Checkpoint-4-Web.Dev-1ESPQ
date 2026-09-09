"use client";

import { useState } from "react";


export default function ContactForm({ onAdd }) {
    const [form, setForm] = useState({nome: "", email: "", telefone: "",
    });
    

    function handleChange(e) {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.nome.trim()) return;

        onAdd({
            ...form,
            id: Date.now(),
        });

        setForm({
            nome: "",
            email: "",
            telefone: "",
        });
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded p-4 space-y-4"
        >
            <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                    Nome
                </label>

                <input
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Email
                </label>

                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>
                    Telefone
                </label>

                <input
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">
                Adicionar Contato
            </button>
        </form>
    );
}