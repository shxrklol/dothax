// dothax v1.2.1 :)

player.onChat(".spammer--fast", function () {
    for (let index = 0; index < 100000000000000000000; index++) {
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
    }
})
player.onChat(".spammer--slow", function () {
    for (let index = 0; index < 100000000000000000000; index++) {
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
    }
})
player.onChat(".bypass", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: starting bypassed commands...")
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: giving player op...")
    player.execute(
    "op " + mobs.target(LOCAL_PLAYER)
    )
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: you can now run admin commands as op.")
})
player.onChat(".inject", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: injected §9dothax§r §ov1.2.1§r successfully")
})
player.onChat(".nuke", function () {

})
player.onChat(".lightning", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: command §o`.lightning`§r running...")
    mobs.spawn(LIGHTNING_BOLT, pos(0, 0, 0))
})
player.onChat(".tnt", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: command §o`.tnt`§r running...")
    for (let index = 0; index < 100000000000000000; index++) {
        mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
    }
})
player.onChat(".spammer", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: please use `.spammer--fast` for a fast version, and use `.spammer--slow`")
})
