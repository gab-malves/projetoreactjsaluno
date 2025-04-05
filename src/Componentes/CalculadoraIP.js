import React, { useState } from 'react';

const CalculadoraIP = () => {
    const [ip, setIp] = useState('');
    const [mask, setMask] = useState('');
    const [result, setResult] = useState(null);

    const calculateNetworkInfo = () => {
        const ipParts = ip.split('.').map(Number);
        const maskParts = mask.split('.').map(Number);

        if (ipParts.length !== 4 || maskParts.length !== 4) {
            alert('Por favor, insira um endereço IPv4 e máscara válidos.');
            return;
        }

        const networkAddress = ipParts.map((part, i) => part & maskParts[i]);
        const broadcastAddress = ipParts.map((part, i) => part | ~maskParts[i] & 255);

        const possibleIPs = [];
        for (let i = 1; i < (1 << (32 - maskParts.reduce((acc, part) => acc + part.toString(2).replace(/0/g, '').length, 0))) - 1; i++) {
            const possibleIP = [...networkAddress];
            let carry = i;
            for (let j = 3; j >= 0; j--) {
                possibleIP[j] += carry;
                carry = Math.floor(possibleIP[j] / 256);
                possibleIP[j] %= 256;
            }
            possibleIPs.push(possibleIP.join('.'));
        }

        setResult({
            networkAddress: networkAddress.join('.'),
            broadcastAddress: broadcastAddress.join('.'),
            possibleIPs,
        });
    };

    return (
        <div>
            <h1>Calculadora de IP</h1>
            <div>
                <label>
                    Endereço IPv4:
                    <input
                        type="text"
                        value={ip}
                        onChange={(e) => setIp(e.target.value)}
                        placeholder="Ex: 192.168.1.1"
                    />
                </label>
            </div>
            <div>
                <label>
                    Máscara de Rede:
                    <input
                        type="text"
                        value={mask}
                        onChange={(e) => setMask(e.target.value)}
                        placeholder="Ex: 255.255.255.0"
                    />
                </label>
            </div>
            <button onClick={calculateNetworkInfo}>Calcular</button>
            {result && (
                <div>
                    <h2>Resultados:</h2>
                    <p><strong>Endereço de Rede:</strong> {result.networkAddress}</p>
                    <p><strong>Endereço de Broadcast:</strong> {result.broadcastAddress}</p>
                    <p><strong>Endereços IPs Possíveis:</strong></p>
                    <ul>
                        {result.possibleIPs.map((ip, index) => (
                            <li key={index}>{ip}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CalculadoraIP;