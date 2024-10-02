import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    server: {
    port: 5000, // 원하는 포트 번호로 변경
    host: "192.168.0.106", // 특정 호스트 설정 (localhost나 127.0.0.1 둘 다 사용 가능)
  },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
