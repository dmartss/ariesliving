import React, { useState } from 'react'
import { Provider } from './collapse-context'
import styles from './collapse.module.css'

export default function CollapseGroup({ children }) {
  const [selected, setSelected] = useState('')
  const onChange = title => {
    setSelected(title)
  }

  return (
    <div className={styles['collapse-group']}>
      <Provider value={{ selected, onChange }}>{children}</Provider>
    </div>
  )
}
