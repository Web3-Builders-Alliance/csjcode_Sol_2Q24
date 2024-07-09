import React from "react";

type TestingReminderProps = {};

const TestingReminder = ({}: TestingReminderProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-xs text-zinc-800 dark:text-zinc-200">
        <span className="text-red-600">Testing Reminder: </span>This app is in
        alpha testing currently. Errors may occur. Rewards and results are not guaranteed. Tasks requiring external
        actions/tokens (offsite from Doerz.fun) are uploaded by other users, and are unverified/unaudited by Doerz.fun for
        suitability, safety, security. Instructions may be inaccurate. Use at your own risk. Report suspicious activity,
        tasks, or errors. Doerz.fun/owners disclaims any responsibility for
        monetary or any other loss.
      </p>
    </div>
  );
};

export default TestingReminder;
