import { useState } from 'react'
import {
  WHATSAPP_NUMBER,
  equipmentOptions,
  electricalOptions,
  masonryOptions,
  propertyOptions,
  locationOptions,
} from '../data/mockData'

const TOTAL_STEPS = 3

const initialFormState = {
  equipment: '',
  electrical: '',
  masonry: '',
  property: '',
  location: '',
}

function buildWhatsAppMessage(formData) {
  const equipment = equipmentOptions.find((o) => o.id === formData.equipment)
  const equipmentLabel = equipment
    ? `${equipment.label} (${equipment.detail})`
    : formData.equipment

  return [
    'Olá, Edir! Vim pelo site e gostaria de um orçamento inicial.',
    `Equipamento: ${equipmentLabel}`,
    `Elétrica Pronta: ${formData.electrical}`,
    `Furos/Alvenaria: ${formData.masonry}`,
    `Imóvel: ${formData.property}`,
    `Região: ${formData.location}`,
  ].join('\n')
}

function OptionButton({ label, detail, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`option-btn ${selected ? 'option-btn-selected' : ''}`}
    >
      <span className="block font-semibold">{label}</span>
      {detail && <span className="mt-1 block text-xs text-slate-500">{detail}</span>}
    </button>
  )
}

function StepIndicator({ currentStep }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-2">
      {Array.from({ length: TOTAL_STEPS }).map((_, index) => {
        const step = index + 1
        const isActive = step === currentStep
        const isCompleted = step < currentStep

        return (
          <div key={step} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
                isActive
                  ? 'bg-brand-500 text-white'
                  : isCompleted
                    ? 'bg-brand-100 text-brand-700'
                    : 'bg-slate-100 text-slate-400'
              }`}
            >
              {isCompleted ? (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                step
              )}
            </div>
            {step < TOTAL_STEPS && (
              <div
                className={`hidden h-0.5 w-8 sm:block ${
                  isCompleted ? 'bg-brand-300' : 'bg-slate-200'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState(initialFormState)

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.equipment !== ''
      case 2:
        return formData.electrical && formData.masonry && formData.property
      case 3:
        return formData.location !== ''
      default:
        return false
    }
  }

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = () => {
    const message = buildWhatsAppMessage(formData)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  let stepContent

  switch (currentStep) {
    case 1:
      stepContent = (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            Qual o tamanho do ambiente?
          </h3>
          <p className="text-sm text-slate-500">
            Selecione a opção que melhor descreve o espaço a ser climatizado.
          </p>
          <div className="mt-4 space-y-3">
            {equipmentOptions.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                detail={option.detail}
                selected={formData.equipment === option.id}
                onClick={() => updateField('equipment', option.id)}
              />
            ))}
          </div>
        </div>
      )
      break

    case 2:
      stepContent = (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Avaliação de Infraestrutura
            </h3>
            <p className="text-sm text-slate-500">
              Essas informações nos ajudam a preparar um orçamento mais preciso.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-slate-700">
              Possui ponto elétrico adequado?
            </p>
            <div className="grid grid-cols-3 gap-2">
              {electricalOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => updateField('electrical', option)}
                  className={`option-btn text-center ${
                    formData.electrical === option ? 'option-btn-selected' : ''
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-slate-700">
              Será necessário furar parede ou quebrar alvenaria?
            </p>
            <div className="grid grid-cols-3 gap-2">
              {masonryOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => updateField('masonry', option)}
                  className={`option-btn text-center ${
                    formData.masonry === option ? 'option-btn-selected' : ''
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-slate-700">Tipo de imóvel</p>
            <div className="space-y-2">
              {propertyOptions.map((option) => (
                <OptionButton
                  key={option}
                  label={option}
                  selected={formData.property === option}
                  onClick={() => updateField('property', option)}
                />
              ))}
            </div>
          </div>
        </div>
      )
      break

    case 3:
      stepContent = (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            Onde será realizado o serviço?
          </h3>
          <p className="text-sm text-slate-500">
            Selecione a região de atendimento.
          </p>
          <div className="mt-4 space-y-3">
            {locationOptions.map((option) => (
              <OptionButton
                key={option}
                label={option}
                selected={formData.location === option}
                onClick={() => updateField('location', option)}
              />
            ))}
          </div>
        </div>
      )
      break

    default:
      stepContent = null
  }

  return (
    <div className="mx-auto w-full max-w-lg">
      <StepIndicator currentStep={currentStep} />

      <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
        {stepContent}

        <div className="mt-8 flex gap-3">
          {currentStep > 1 && (
            <button type="button" onClick={handleBack} className="btn-secondary flex-1">
              Voltar
            </button>
          )}

          {currentStep < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceed()}
              className="btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continuar
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canProceed()}
              className="btn-primary flex flex-1 items-center justify-center gap-2 bg-green-600 shadow-green-600/25 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar pelo WhatsApp
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
