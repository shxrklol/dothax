/**
 * dothax 1.4-pub
 *
 *  :3
 */

player.onChat(".kill", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: command §o`.kill`§r running...")
    mobs.kill(
        mobs.target(ALL_ENTITIES)
    )
})

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
player.onChat(".nuke--yes", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: command §o`.nuke--yes`§r running...")
    for (let index = 0; index < 100000000000000000; index++) {
        mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        gameplay.title(mobs.target(ALL_PLAYERS), "§9dothax§r owns all", "§dNUKED BY DOTHAX")
        gameplay.setGameMode(
            CREATIVE,
            mobs.target(LOCAL_PLAYER)
        )
        player.execute(
            "give @a totem_of_undying 100"
        )
        mobs.applyEffect(BLINDNESS, mobs.target(ALL_PLAYERS), 600, 255)
        mobs.applyEffect(WEAKNESS, mobs.target(ALL_PLAYERS), 600, 255)
        mobs.applyEffect(POISON, mobs.target(ALL_PLAYERS), 600, 255)
        gameplay.setDifficulty(HARD)
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
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: injected §9dothax§r §ov1.3.1-pub§r successfully")
})
player.onChat(".jesus", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: command §o`.jesus`§r running...")
    blocks.fill(
        WATER,
        pos(-4, -1, -4),
        pos(4, -1, 4),
        FillOperation.Replace
    )
    player.onTravelled(SWIM_WATER, function on_travelled_swim_water() {
        blocks.fill(ICE, pos(-1, -1, -1), pos(1, -1, 1), FillOperation.Replace)
    })
})
player.onChat(".nuke", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: command §o`.nuke`§r running...")
    gameplay.setGameRule(KEEP_INVENTORY, false)
    gameplay.setGameMode(
        SURVIVAL,
        mobs.target(ALL_PLAYERS)
    )
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: are you sure that you want to run this command? THIS WILL DESTROY A WORLD. PLEASE TYPE `.nuke--yes` IN CHAT IF YOU ARE SURE`")
})
player.onChat(".lightning", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: command §o`.lightning`§r running...")
    mobs.spawn(LIGHTNING_BOLT, pos(0, 0, 0))
})
player.onChat(".help", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: command §o`.help`§r running...")
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: commands are: .nuke, .spammer, .bypass, .lightning, .tnt, .creative, .jesus, and .kill")
})
player.onChat(".tnt", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: command §o`.tnt`§r running...")
    for (let index = 0; index < 100000000000000000; index++) {
        mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
    }
})
player.onChat(".spammer", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: command §o`.spammer`§r running...")
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: please use `.spammer--fast` for a fast version, and use `.spammer--slow`")
})
player.onChat(".creative", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: command §o`.creative`§r running...")
    gameplay.setGameMode(
        CREATIVE,
        mobs.target(LOCAL_PLAYER)
    )
})
