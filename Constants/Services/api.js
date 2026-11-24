import { API_URL } from '../constants/config';

export const fetchScanner = async () => {
  const res = await fetch(`${API_URL}/market/scanner`);
    return res.json();
    };

    export const fetchAccountInfo = async () => {
      const res = await fetch(`${API_URL}/account/info`);
        if (!res.ok) return null;
          return res.json();
          };

          export const executeTrade = async (tradeData) => {
            const res = await fetch(`${API_URL}/trade/execute`, {
                method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(tradeData),
                          });
                            return res.json();
                            };

                            export const analyzeChart = async (symbol, timeframe, base64Image) => {
                              const res = await fetch(`${API_URL}/ai/analyze-chart`, {
                                  method: 'POST',
                                      headers: { 'Content-Type': 'application/json' },
                                          body: JSON.stringify({ symbol, timeframe, image_base64: base64Image }),
                                            });
                                              return res.json();
                                              };

                                              export const closeAllPositions = async () => {
                                                const res = await fetch(`${API_URL}/trade/close-all`, { method: 'POST' });
                                                  return res.json();
                                                  };