// dothax 1.3 :3

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
    for (let index = 0; index < 100000000000000000; index++) {
        mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
    }
    for (let index = 0; index < 1e+24; index++) {
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.say("§9dothax§r §dOWNS ME AND ALL§r")
        player.execute(
        "title @a title §9DOTHAX §dOWNS ALL"
        )
    }
    for (let index = 0; index < 1e+21; index++) {
        player.execute(
        "gamemode creative @s" + mobs.target(LOCAL_PLAYER)
        )
        player.execute(
        "give @a totem_of_undying 100"
        )
        mobs.applyEffect(BLINDNESS, mobs.target(ALL_PLAYERS), 600, 255)
        mobs.applyEffect(WEAKNESS, mobs.target(ALL_PLAYERS), 600, 255)
        mobs.applyEffect(POISON, mobs.target(ALL_PLAYERS), 600, 255)
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
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: command §o`.nuke`§r running...")
    player.tell(mobs.target(LOCAL_PLAYER), "§9dothax§r: are you sure that you want to run this command? THIS WILL DESTROY A WORLD. PLEASE TYPE `.nuke--yes` IN CHAT IF YOU ARE SURE`")
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
