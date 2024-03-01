import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:5173/',
};

export default cors(corsOptions);
