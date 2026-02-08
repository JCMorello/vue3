// js/server.js
import express from 'express';
import cors from 'cors';
import { sendMail } from './serverMail.js';

const app = express();
app.use(express.json());
app.use(cors()); // permite peticiones desde cualquier origen (dev)

app.post('/send-mail', async (req, res) => {
  try {
    await sendMail();
    console.log('[SERVER] Email enviado correctamente'); // log en consola
    res.json({ ok: true });
  } catch (e) {
    console.error('[SERVER] Error enviando mail:', e.message);
    res.status(500).json({ ok: false, error: e.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[SERVER] API Mail escuchando en puerto ${PORT}`);
});
