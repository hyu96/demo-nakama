let InitModule: nkruntime.InitModule =
        function(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, initializer: nkruntime.Initializer) {
    logger.info("Hello World!")
    initializer.registerRpc('rpcHealthCheck', rpcHealthCheck)
    initializer.registerBeforeAuthenticateCustom(BeforeAuthenticateCustom)
}