/*:
 * @plugindesc Plugin used to block all movement input via switch.
 * @author ShadowDragon
 *
 * @help
 * Switch to stop all Movement for player (use it temporarly), when ON,
 * make sure you turn it back OFF (temporarly plugin), Please Use YEP_StopMapMovement
 * found here (NOTE: it's a paid plugin: http://www.yanfly.moe/wiki/Stop_Map_Movement_(YEP) )
 * 
 * This plugin can be used without credits, but I advise to use the YEP plugin which I used to
 * make this Evented Ocarina Tutorial! so it's best to keep it there for now untill released publicity
 * for all free and commercial project (you may do so, but use on your own risk!)
 *
 * @param Disable Movement Switch
 * @type switch
 * @desc Stop Movement Switch Number?
 * @default 10
 */
    ShadowDragon_StopMovement = Game_Player.prototype.moveByInput
        Game_Player.prototype.moveByInput = function() {
            if ($gameSwitches.value(PluginManager.parameters("ShadowDragon_SM")["Disable Movement Switch"])) return;
                return ShadowDragon_StopMovement.call(this);
        };
