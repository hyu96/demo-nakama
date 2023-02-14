function rpcGetAccount(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, userId: string) {
    try {
        let account = nk.accountGetId(userId);
        return JSON.stringify(account);
    } catch (error) {
        // handle error
    }
}