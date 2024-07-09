use anchor_lang::prelude::*;

declare_id!("w6XLMEHf4xg9VYQERCWkgnA5YDSuZYJo1Ub71sajwZu");

#[program]
pub mod escrow_doerz {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
