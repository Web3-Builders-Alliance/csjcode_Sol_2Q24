import {
  RxArrowDown,
  RxArrowRight,
  RxArrowUp,
  RxCheckCircled,
  RxCircle,
  RxCrossCircled,
  RxQuestionMarkCircled,
  RxStopwatch,
} from "react-icons/rx"

export const taskTypes = [
  {
    value: "ownership",
    label: "Ownership",
  },
  {
    value: "finance",
    label: "Finance",
  },
  {
    value: "activity",
    label: "Activity",
  },
  {
    value: "achievements",
    label: "Achievements",
  },
  {
    value: "onboarding",
    label: "Onboarding",
  },
  {
    value: "developer",
    label: "Developer",
  },
  {
    value: "social",
    label: "Social",
  },


  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "upcoming",
    label: "Upcoming",
    icon: RxQuestionMarkCircled,
  },
  {
    value: "available",
    label: "Available",
    icon: RxCircle,
  },
  {
    value: "doing",
    label: "Doing",
    icon: RxStopwatch,
  },
  {
    value: "submitted",
    label: "Submitted",
    icon: RxCheckCircled,
  },
  {
    value: "validated",
    label: "Validated",
    icon: RxCrossCircled,
  },
  {
    value: "rejected",
    label: "Rejected",
    icon: RxCrossCircled,
  },
  {
    value: "rewarded",
    label: "Rewarded",
    icon: RxCrossCircled,
  },
  {
    value: "expired",
    label: "Expired",
    icon: RxCrossCircled,
  },
  {
    value: "notInterested",
    label: "Not Interested",
    icon: RxCrossCircled,
  },
]


export const statusesMakerzTasksForm = [
  {
    value: "schedule",
    label: "Schedule",
    icon: RxCircle,
  },
  {
    value: "goLive",
    label: "Go Live",
    icon: RxQuestionMarkCircled,
  },
  {
    value: "doing",
    label: "Doing",
    icon: RxStopwatch,
  },
  {
    value: "submitted",
    label: "Submitted",
    icon: RxCheckCircled,
  },
  {
    value: "validated",
    label: "Validated",
    icon: RxCrossCircled,
  },
  {
    value: "rejected",
    label: "Rejected",
    icon: RxCrossCircled,
  },
  {
    value: "rewarded",
    label: "Rewarded",
    icon: RxCrossCircled,
  },
  {
    value: "expired",
    label: "Expired",
    icon: RxCrossCircled,
  },
  {
    value: "notInterested",
    label: "Not Interested",
    icon: RxCrossCircled,
  },
]

export const rewardSizes = [
  {
    label: "Low",
    value: "low",
    icon: RxArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: RxArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: RxArrowUp,
  },
]


export const makerzStatuses = [
  {
    value: "scheduled",
    label: "Scheduled",
    icon: RxQuestionMarkCircled,
  },
  {
    value: "live",
    label: "Live",
    icon: RxCircle,
  },
  {
    value: "submitted",
    label: "Submitted",
    icon: RxCheckCircled,
  },
  {
    value: "rejected",
    label: "Rejected",
    icon: RxCrossCircled,
  },
  {
    value: "unfunded",
    label: "Unfunded",
    icon: RxCrossCircled,
  },
  {
    value: "expired",
    label: "Expired",
    icon: RxCrossCircled,
  },
  {
    value: "saved",
    label: "Saved",
    icon: RxCrossCircled,
  },
]