function InitModule(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, initializer: nkruntime.Initializer) {
    logger.info("Hello World!");
    initializer.registerRpc('rpchealthcheck', rpcHealthCheck);
    initializer.registerRpc('account_id', rpcGetAccount);
}