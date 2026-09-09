import { useEffect, useRef, useState } from 'react'
import { Languages, Minus, Palette, Plus, RotateCcw, Settings2, Type, X } from 'lucide-react'
import { languageOptions, LanguageCode } from '../translations'

export type ThemeName = 'ocean' | 'emerald' | 'sunset' | 'purple'
export type FontScale = 0.9 | 1 | 1.1

type Props = {
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  fontScale: FontScale
  setFontScale: (scale: FontScale) => void
  copy: {
    customize: string
    title: string
    theme: string
    textSize: string
    language: string
    reset: string
    close: string
    smaller: string
    normal: string
    larger: string
  }
}

const themes: { id: ThemeName; label: string }[] = [
  { id: 'ocean', label: 'Ocean' },
  { id: 'emerald', label: 'Emerald' },
  { id: 'sunset', label: 'Sunset' },
  { id: 'purple', label: 'Purple' },
]

export default function CustomizeMenu({
  language,
  setLanguage,
  theme,
  setTheme,
  fontScale,
  setFontScale,
  copy,
}: Props) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (open && panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const reset = () => {
    setTheme('ocean')
    setFontScale(1)
    setLanguage('en')
  }

  return (
    <div className="customize-wrap" ref={panelRef}>
      <button
        className="customize-trigger"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <Settings2 size={16} />
        <span>{copy.customize}</span>
      </button>

      {open && (
        <div className="customize-panel" role="dialog" aria-label={copy.title}>
          <div className="customize-header">
            <div>
              <span className="customize-overline">UI / ACCESSIBILITY</span>
              <strong>{copy.title}</strong>
            </div>
            <button className="icon-button" onClick={() => setOpen(false)} aria-label={copy.close}>
              <X size={17} />
            </button>
          </div>

          <div className="setting-group">
            <div className="setting-label"><Palette size={15} /> {copy.theme}</div>
            <div className="theme-options">
              {themes.map((item) => (
                <button
                  key={item.id}
                  className={`theme-option theme-${item.id} ${theme === item.id ? 'active' : ''}`}
                  onClick={() => setTheme(item.id)}
                  type="button"
                  aria-label={item.label}
                  title={item.label}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>

          <div className="setting-group">
            <div className="setting-label"><Type size={15} /> {copy.textSize}</div>
            <div className="font-options" role="group" aria-label={copy.textSize}>
              <button
                type="button"
                className={fontScale === 0.9 ? 'active' : ''}
                onClick={() => setFontScale(0.9)}
                aria-label={copy.smaller}
                title={copy.smaller}
              >
                <Minus size={14} /> A
              </button>
              <button
                type="button"
                className={fontScale === 1 ? 'active' : ''}
                onClick={() => setFontScale(1)}
                aria-label={copy.normal}
                title={copy.normal}
              >
                A
              </button>
              <button
                type="button"
                className={fontScale === 1.1 ? 'active' : ''}
                onClick={() => setFontScale(1.1)}
                aria-label={copy.larger}
                title={copy.larger}
              >
                A <Plus size={14} />
              </button>
            </div>
          </div>

          <div className="setting-group">
            <div className="setting-label"><Languages size={15} /> {copy.language}</div>
            <div className="language-options">
              {languageOptions.map((item) => (
                <button
                  type="button"
                  key={item.code}
                  className={language === item.code ? 'active' : ''}
                  onClick={() => setLanguage(item.code)}
                >
                  <span className="language-code">{item.short}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button className="reset-settings" type="button" onClick={reset}>
            <RotateCcw size={14} /> {copy.reset}
          </button>
        </div>
      )}
    </div>
  )
}
