use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Transfer};
use solana_program::pubkey::Pubkey;
use std::str::FromStr;

declare_id!("BmNQQBuHKLayRhUEWUhwmFGfSS2Z582rLQAGXe3MpWPa");

#[program]
pub mod solana_swap {
    use super::*;

    const SOL_TO_DOERZ_RATE: u64 = 5000;

    pub fn initialize(ctx: Context<Initialize>, initial_balance: u64) -> Result<()> {
        let swap_account = &mut ctx.accounts.swap_account;
        swap_account.balance = initial_balance;
        Ok(())
    }

    pub fn swap_sol_to_doerz(ctx: Context<SwapSolToDoerz>, sol_amount: u64) -> Result<()> {
        let swap_account = &mut ctx.accounts.swap_account;

        let doerz_amount = sol_amount * SOL_TO_DOERZ_RATE;

        let seeds = &[swap_account.to_account_info().key.as_ref()];
        let signer_seeds = &[&seeds[..]];

        let cpi_accounts = Transfer {
            from: ctx.accounts.program_token_account.to_account_info(),
            to: ctx.accounts.user_token_account.to_account_info(),
            authority: ctx.accounts.program_token_account.to_account_info(), // Assuming program_token_account is the authority
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new_with_signer(cpi_program, cpi_accounts, signer_seeds);
        token::transfer(cpi_ctx, doerz_amount)?;

        swap_account.balance -= doerz_amount;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 8)]
    pub swap_account: Account<'info, SwapAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct SwapSolToDoerz<'info> {
    #[account(mut)]
    pub swap_account: Account<'info, SwapAccount>,
    #[account(signer)]
    pub user: Signer<'info>,
    #[account(
        mut,
        constraint = program_token_account.owner == solana_program::system_program::ID,
        address = Pubkey::from_str("CzZbSp3RTXiRjTd1WSZN6NaaZKbCuyj7dEkZm8MLTZYE").unwrap()
    )]
    pub program_token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct SwapAccount {
    pub balance: u64,
}
