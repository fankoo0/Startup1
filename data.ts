import { Category } from './types';

export const categoriesData: Category[] = [
  {
    id: 'medicine',
    name: 'Медицина',
    professions: [
      {
        id: 'doctor',
        name: 'Врач',
        models: [
          {
            id: 'med-gpt',
            name: 'MedGPT',
            description: 'Специализированная модель для медицинской диагностики и консультаций',
            link: 'https://example.com/medgpt'
          },
          {
            id: 'imagemed',
            name: 'ImageMed',
            description: 'ИИ для анализа медицинских изображений и обнаружения аномалий',
            link: 'https://example.com/imagemed'
          },
          {
            id: 'clinicalbert',
            name: 'ClinicalBERT',
            description: 'Модель для обработки медицинских текстов и клинических записей',
            link: 'https://example.com/clinicalbert'
          }
        ]
      },
      {
        id: 'nurse',
        name: 'Медсестра',
        models: [
          {
            id: 'care-assistant',
            name: 'Care Assistant',
            description: 'ИИ-помощник для мониторинга состояния пациентов и управления лечением',
            link: 'https://example.com/care-assistant'
          },
          {
            id: 'med-scheduler',
            name: 'MedScheduler',
            description: 'Система для оптимизации графиков работы и ухода за пациентами',
            link: 'https://example.com/med-scheduler'
          }
        ]
      },
      {
        id: 'surgeon',
        name: 'Хирург',
        models: [
          {
            id: 'surgery-assistant',
            name: 'Surgery Assistant',
            description: 'ИИ для планирования и симуляции хирургических операций',
            link: 'https://example.com/surgery-assistant'
          },
          {
            id: 'medrobotics',
            name: 'MedRobotics',
            description: 'ИИ для управления роботизированными хирургическими системами',
            link: 'https://example.com/medrobotics'
          }
        ]
      }
    ]
  },
  {
    id: 'education',
    name: 'Образование',
    professions: [
      {
        id: 'teacher',
        name: 'Учитель',
        models: [
          {
            id: 'eduai',
            name: 'EduAI',
            description: 'ИИ для создания персонализированных учебных планов и материалов',
            link: 'https://example.com/eduai'
          },
          {
            id: 'gradingassistant',
            name: 'Grading Assistant',
            description: 'Автоматизированная система оценки работ учащихся',
            link: 'https://example.com/gradingassistant'
          },
          {
            id: 'lessonplanner',
            name: 'Lesson Planner',
            description: 'ИИ для разработки эффективных планов уроков и учебных мероприятий',
            link: 'https://example.com/lessonplanner'
          }
        ]
      },
      {
        id: 'professor',
        name: 'Профессор',
        models: [
          {
            id: 'researchassistant',
            name: 'Research Assistant',
            description: 'ИИ для анализа научной литературы и помощи в исследованиях',
            link: 'https://example.com/researchassistant'
          },
          {
            id: 'academicwriter',
            name: 'Academic Writer',
            description: 'Помощник для создания и редактирования научных статей',
            link: 'https://example.com/academicwriter'
          }
        ]
      },
      {
        id: 'tutor',
        name: 'Репетитор',
        models: [
          {
            id: 'tutorai',
            name: 'TutorAI',
            description: 'Персональный ИИ-репетитор для индивидуального обучения',
            link: 'https://example.com/tutorai'
          },
          {
            id: 'homeworkhelper',
            name: 'Homework Helper',
            description: 'ИИ для помощи с домашними заданиями и объяснения сложных концепций',
            link: 'https://example.com/homeworkhelper'
          }
        ]
      }
    ]
  },
  {
    id: 'it',
    name: 'Информационные технологии',
    professions: [
      {
        id: 'developer',
        name: 'Разработчик',
        models: [
          {
            id: 'copilot',
            name: 'GitHub Copilot',
            description: 'ИИ-ассистент для написания кода и автоматизации программирования',
            link: 'https://example.com/copilot'
          },
          {
            id: 'codereviewai',
            name: 'Code Review AI',
            description: 'Автоматический анализ кода для выявления ошибок и улучшения качества',
            link: 'https://example.com/codereviewai'
          },
          {
            id: 'devops-assistant',
            name: 'DevOps Assistant',
            description: 'ИИ для автоматизации процессов DevOps и CI/CD',
            link: 'https://example.com/devops-assistant'
          }
        ]
      },
      {
        id: 'dataanalyst',
        name: 'Аналитик данных',
        models: [
          {
            id: 'dataexplorer',
            name: 'Data Explorer',
            description: 'ИИ для анализа и визуализации больших объемов данных',
            link: 'https://example.com/dataexplorer'
          },
          {
            id: 'predictionengine',
            name: 'Prediction Engine',
            description: 'Инструмент для создания прогнозных моделей и машинного обучения',
            link: 'https://example.com/predictionengine'
          }
        ]
      },
      {
        id: 'sysadmin',
        name: 'Системный администратор',
        models: [
          {
            id: 'netmonitor',
            name: 'Network Monitor',
            description: 'ИИ для мониторинга и оптимизации сетевой инфраструктуры',
            link: 'https://example.com/netmonitor'
          },
          {
            id: 'securityai',
            name: 'Security AI',
            description: 'Система обнаружения и предотвращения киберугроз',
            link: 'https://example.com/securityai'
          }
        ]
      }
    ]
  },
  {
    id: 'finance',
    name: 'Финансы',
    professions: [
      {
        id: 'accountant',
        name: 'Бухгалтер',
        models: [
          {
            id: 'accountingai',
            name: 'Accounting AI',
            description: 'ИИ для автоматизации бухгалтерского учета и финансовой отчетности',
            link: 'https://example.com/accountingai'
          },
          {
            id: 'taxassistant',
            name: 'Tax Assistant',
            description: 'Помощник для оптимизации налоговых расчетов и соблюдения нормативных требований',
            link: 'https://example.com/taxassistant'
          }
        ]
      },
      {
        id: 'financialanalyst',
        name: 'Финансовый аналитик',
        models: [
          {
            id: 'marketpredictor',
            name: 'Market Predictor',
            description: 'ИИ для анализа рыночных тенденций и прогнозирования финансовых показателей',
            link: 'https://example.com/marketpredictor'
          },
          {
            id: 'investmentadvisor',
            name: 'Investment Advisor',
            description: 'Система для оптимизации инвестиционных портфелей и стратегий',
            link: 'https://example.com/investmentadvisor'
          }
        ]
      },
      {
        id: 'banker',
        name: 'Банкир',
        models: [
          {
            id: 'riskanalyzer',
            name: 'Risk Analyzer',
            description: 'ИИ для оценки кредитных рисков и принятия финансовых решений',
            link: 'https://example.com/riskanalyzer'
          },
          {
            id: 'frauddetector',
            name: 'Fraud Detector',
            description: 'Система обнаружения мошеннических операций и необычной активности',
            link: 'https://example.com/frauddetector'
          }
        ]
      }
    ]
  }
]; 