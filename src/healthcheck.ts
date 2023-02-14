function rpcHealthCheck(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, payload: string) {
    logger.info('health check rpc called');
    return JSON.stringify({success: "true"});
}