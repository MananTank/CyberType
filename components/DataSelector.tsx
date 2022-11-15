import { Dispatch } from 'react'
import { Action } from '../lib/types'
import styles from '../styles/DataSelector.module.scss'
import { DoneIcon } from './icons'

export const dataNameGroups = [
  {
    group: 'English',
    values: [
      'Quotes',
      'English 200',
      'English 1K',
      'English 5K',
      'English 10K',
      'Wordle',
      'Commonly Misspelled'
    ]
  },
  {
    group: 'Programming',
    values: [
      'JavaScript',
      'Rust',
      'HTML',
      'CSS',
      'C++',
      'SQL',
      'Git',
      'Bash',
      'Python',
      'Java',
      'C#'
    ]
  }
]

type Props = { dispatch: Dispatch<Action>; handleClose: () => void; selectedData: string }

export function DataSelector({ dispatch, handleClose, selectedData }: Props) {
  return (
    <div className={styles.dataSelector}>
      {dataNameGroups.map(dataNameGroup => (
        <div key={dataNameGroup.group} className={styles.optionGroup}>
          <h3 className={styles.groupTitle}> {dataNameGroup.group} </h3>
          <div className={styles.options}>
            {dataNameGroup.values.map(value => (
              <div
                key={value}
                className={styles.option}
                data-active={selectedData === value}
                onClick={() => {
                  handleClose()
                  dispatch({ type: 'setDataName', data: value })
                }}
              >
                {value}
                {selectedData === value && (
                  <span className={styles.done}> {DoneIcon} </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
