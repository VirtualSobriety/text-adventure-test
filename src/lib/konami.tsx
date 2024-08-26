import React from 'react';

export function useKonamiCode(
  sequence: string[] = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    'Enter',
  ]
) {
  const [isActive, setIsActive] = React.useState(false)

  const buffer = React.useRef<string[]>([])

  const keySequence = React.useCallback((event: KeyboardEvent) => {
    if (event.defaultPrevented) return

    if (event.key === sequence[buffer.current.length]) {
      buffer.current = [...buffer.current, event.key]
    } else {
      buffer.current = []
    }

    if (buffer.current.length === sequence.length) {
      const bufferString = buffer.current.toString()
      const sequenceString = sequence.toString()

      if (sequenceString === bufferString) {
        setIsActive(true)
      }
    }
  }, [sequence])


  React.useEffect(() => {
    document.addEventListener('keydown', keySequence)
    return () => document.removeEventListener('keydown', keySequence)
  }, [keySequence])

  return [isActive, setIsActive]

}