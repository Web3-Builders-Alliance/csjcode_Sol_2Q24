(base) csjcode:~/WEBDEV/DOERZ.FUN/doerz-onchain/escrow/escrow-doerz/programs$ anchor deploy
Deploying cluster: https://api.devnet.solana.com
Upgrade authority: /Users/csjcode/.config/solana/id.json
Deploying program "escrow_doerz"...
Program path: /Users/csjcode/WEBDEV/DOERZ.FUN/doerz-onchain/escrow/escrow-doerz/target/deploy/escrow_doerz.so...
Program Id: 5iRen2D71pgV55SKGLXe1LkaheBBpf1sVK97xdE6zSfK

https://solana.fm/address/5iRen2D71pgV55SKGLXe1LkaheBBpf1sVK97xdE6zSfK/transactions


```rust
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

```