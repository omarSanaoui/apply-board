export type RuleStatus = 'idle' | 'met' | 'error'

export interface Rule {
  label: string,
  ruleStatus: RuleStatus
}