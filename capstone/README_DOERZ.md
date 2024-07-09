# What is DOERZ.FUN

### Task Rewards Platform

Folders in demo alpha repo:

* doerz-alpha202407-onchain
* doerz-alpha202407-web
* doerz-alpha202407-localserver

This represent 2-4 weeks work on a task rewards platform with ongoing dev in progress.

#### Concept

A platform where users "Doerz" can complete tasks to earn rewards, and users called "Makerz" fund the rewards.

* The initial interface resembles Google Gmail, where new tasks (similar to emails) arrive regularly, and users can claim rewards for completing them.

* The advanced table implemented allows for multiple types of filtering, pagination etc.

* There will be other views implemented too.

Some key differences with other task platforms are:

* Fast AI-assisted task creation for founders and product managers.
* Fund tasks in seconds.
* Fast, easy and fun achievements.
* Users get reward opportunities updated all the time.
* Smooth UI/UX with multiple views.
* Many types of fresh challenges.

#### Progress

All aspects of the platform are in progress, with the API and web/web3,js/UI/UX app being the most advanced.

A token22 test token was created and deployed on the Solana devnet, and the token ownership task validation is working.

The onchain aspect is in progress, with some parts working and some parts not customized or deployed yet.

The rewards system is not yet full implemented onchain, or the validation rule system onchain. Some parts are simulated. Some configuration issues are being resolved.

The API is local server only, but will be deployed to AWS at a later date, and is currently in process of being developed with Terraform. I've doen this several times, so should not be a problem, just takes some time.

Login with Solana wallet works and Login steps but no rewards are given yet, and an additional AWS Cognito login will be available, but is currently simulated.

API is local server only, but will be deployed to AWS at a later date.

#### Features

For demo purpose showing some onchain, but other onchain may not be available in the demo.




* User Authentication: Use Solana wallets for user login and authentication.
* Task Management: Admins can create and manage tasks. Tasks can be displayed in an inbox-style layout.
* Rewards System: Users earn rewards (tokens or NFTs) for completing tasks.
* Transaction History: Users can view their task completion and reward history.
* Notification System: Users receive notifications when new tasks are available.
* Doerz Inbox and Dashboards
* Makerz Admin and Dashboard


#### Potential Audiences:

* General Consumers
* NFT Enthusiasts
* Developers and Tech Enthusiasts
* Investors and VCs
* Content Creators and Influencers
* Community Members of Specific Projects


#### Types of tasks

For demo purpose only token ownership.

* Token balance
* Token ownership
* Ecosystem App signup
* NFT ownership - Digital products purchased.
* NFT ownership - Art
* NFT ownership - Certfied coursework
* NFT ownership - Other shopping
* NFT creation and listing
* Onchain voting such as DAO
* Onchain Feature Feedback
* Token sharing
* Trivia quizes

### Implementing the Platform:

#### Frontend (React.js, Next.js):
1. **Task Dashboard:**
   - Inbox-style interface for displaying available tasks.
   - Filtering and sorting options to find tasks easily.
2. **Task Details Page:**
   - Detailed information about each task.
   - Instructions and criteria for task completion.
   - Claim rewards functionality.
3. **User Profile:**
   - View completed tasks and earned rewards.
   - Track progress and achievements.
4. **Notifications:**
   - Alerts for new tasks and rewards.

#### Backend (Solana, Anchor, web3.js):
1. **Smart Contract Development:**
   - Create and manage tasks and rewards.
   - Handle user interactions and task completion verification.
   - Distribute rewards upon task completion.
2. **Database:**
   - Store task metadata and user data (Firebase, MongoDB).
3. **APIs:**
   - Interact with the Solana blockchain for task and reward management.

### Example Task Flow:
1. **User logs in using their Solana wallet.**
2. **User browses available tasks in the inbox interface.**
3. **User selects a task and views the details.**
4. **User completes the task and submits proof (e.g., transaction hash, screenshot).**
5. **Smart contract verifies task completion and distributes the reward.**
6. **User receives notification and can view the reward in their profile.**