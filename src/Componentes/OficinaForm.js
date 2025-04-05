import React, { useState } from 'react';
import './meucss.css';

function OficinaForm() {
    const [formData, setFormData] = useState({
        nome: '',
        idade: '',
        curso: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do Aluno:', formData);
    };

    return (
        <div className="gradient-background">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="idade">Idade:</label>
                    <input
                        type="number"
                        id="idade"
                        name="idade"
                        value={formData.idade}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="curso">Curso:</label>
                    <input
                        type="text"
                        id="curso"
                        name="curso"
                        value={formData.curso}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn-submit">Submeter</button>
            </form>
            <div className="form-data">
                <h3>Dados Digitados:</h3>
                <p><strong>Nome:</strong> {formData.nome}</p>
                <p><strong>Idade:</strong> {formData.idade}</p>
                <p><strong>Curso:</strong> {formData.curso}</p>
            </div>
        </div>
    );
}

export default OficinaForm;