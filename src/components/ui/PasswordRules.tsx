import { Rule, RuleStatus } from "@/types/passwordRules"
import { Circle, CircleAlert, CircleCheck } from "lucide-react"

interface PasswordRulesProps {
  rules: Rule[]
}

const rowStyles: Record<RuleStatus, string> = {
  idle: 'text-card-sub',
  met: 'text-offer-solid',
  error: 'text-danger'
}
const icons: Record<RuleStatus, React.ReactNode>= {
  idle: <Circle size={12} className="fill-current"/>,
  met: <CircleCheck size={12} className="text-current"/>,
  error: <CircleAlert size={12} className="text-current"/>
}
const requirementsReader: Record<RuleStatus, string>= {
  idle: 'not yet checked',
  met: 'requirement met',
  error: 'requirement not met'
}
export default function PasswordRules({ rules }: PasswordRulesProps) {
  return (
    <div>
      <ul className="px-3.5 py-3 rounded-[10px] bg-board flex flex-col gap-1.5 text-[13px] text-card-sub list-none">
        {
          rules.map((rule, index) => {
            const rowStyle = rowStyles[rule.ruleStatus]
            const icon = icons[rule.ruleStatus]
            const requirementReader = requirementsReader[rule.ruleStatus]
            return (
            <li className={`flex items-center gap-1 ${rowStyle}`} key={index + rule.label}>{icon}{rule.label}<span className="sr-only">{requirementReader}</span></li>
          )
          })
        }
      </ul>
    </div>
  )
}
