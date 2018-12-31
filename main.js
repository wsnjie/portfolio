let feed = new Instafeed({
    target: 'instafeed',
    get: 'user',
    userId: '217204082',
    clientId: '68e09ca7d86e47edbb5c140640ea3fda',
    accessToken: '217204082.1677ed0.637cf7479ac845ab937d1aef2dea3849',
    sortBy: 'random',
    resolution: 'low_resolution',
    limit: 9,
    template: '<a href="{{link}}"><img class="feedpics" src="{{image}}" /></a>'
})
feed.run()