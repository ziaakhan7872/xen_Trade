export const SubscribeToSocketChannel = (centrifugueBuild, channelName, {
    onPublication,
    onSubscribed,
    onError,
    onUnsubscribed,
}) => {

    if (!centrifugueBuild) return null;

    let sub = centrifugueBuild?.getSubscription(channelName);

    if (!sub) {
        sub = centrifugueBuild?.newSubscription(channelName);
    }
    sub?.on("subscribed", (ctx) => {
        console.log(`Subscribed to channel: ${channelName}`, ctx);
        onSubscribed?.(ctx);
    });
    sub?.on("publication", (ctx) => {
        // console.log(`New publication on channel ${channelName}:`, ctx);
        onPublication?.(ctx);
    });
    sub?.on("unsubscribed", (ctx) => {
        console.log(`Unsubscribed from channel: ${channelName}`, ctx);
        onUnsubscribed?.(ctx);
    });
    sub?.on("error", (error) => {
        console.error(`Error on channel ${channelName}:`, error);
        onError?.(error);
    });

    if (sub.state !== "subscribed" && sub.state !== "subscribing") {
        sub.subscribe();
    }

    return sub;
}