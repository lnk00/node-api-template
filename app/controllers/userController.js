const getUserInformation = (ctx) => {
    ctx.body = ctx.state.user;
}

export {
    getUserInformation
}
