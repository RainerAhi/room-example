import { EffectComposer, Bloom, Vignette, HueSaturation, Noise } from '@react-three/postprocessing'

export default function CustomEffects() {
  return (
    <EffectComposer disableNormalPass multisampling={8}>
        <Noise opacity={ 0 } />
    </EffectComposer>
  )
}