import { createRoot } from 'react-dom/client'
import './styles.css'
import { Canvas } from '@react-three/fiber'
import App from './App'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)

