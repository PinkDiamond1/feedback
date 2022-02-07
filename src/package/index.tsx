import React from 'react'
import FeedbackModal from './modal'
import TriggerButton from './trigger-button'
import { FeedbackProvider } from './store'
import styles from './styles.module.css'

export default function FeedbackWidget({
  user,
  metadata,
  type = 'form',
  apiPath = 'api/feedback',
  themeColor = '#5f6c72',
  textColor = '#ffffff',
  title,
  description,
  showOnInitial = false,
  children,
}: {
  user?: string
  metadata?: object
  type?: 'form' | 'rate' | 'full'
  apiPath?: string
  themeColor?: string
  textColor?: string
  title?: null | string | React.ReactElement
  description?: null | string | React.ReactElement
  showOnInitial?: boolean
  children?: React.ReactElement
}) {
  return (
    <FeedbackProvider
      user={user}
      metadata={metadata}
      type={type}
      apiPath={apiPath}
      themeColor={themeColor}
      textColor={textColor}
      showOnInitial={showOnInitial}
    >
      <div
        className={styles.root}
        style={{
          // @ts-ignore
          '--color-primary': themeColor,
          '--color-text': textColor,
        }}
      >
        <TriggerButton>{children}</TriggerButton>
        <FeedbackModal title={title} description={description} />
      </div>
    </FeedbackProvider>
  )
}
