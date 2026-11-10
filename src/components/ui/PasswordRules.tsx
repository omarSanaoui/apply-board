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
  idle: <Circle size={13} className="fill-card-sub"/>,
  met: <CircleCheck size={13} className="text-offer-solid"/>,
  error: <CircleAlert size={13} className="text-danger"/>
}
export default function PasswordRules({ rules }: PasswordRulesProps) {
  return (
    <div>
      <ul className="px-3.5 py-3 rounded-[10px] bg-board flex flex-col gap-1.5 text-[13px] text-card-sub list-none">
        {
          rules.map((rule, index) => {
            const rowStyle = rowStyles[rule.ruleStatus]
            const icon = icons[rule.ruleStatus]
            return (
            <li className={`flex items-center gap-1 ${rowStyle}`} key={index + rule.label}>{icon}{rule.label}</li>
          )
          })
        }
      </ul>
    </div>
  )
}
