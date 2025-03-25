// let images = document.querySelectorAll('.single__image')
// let imagesArray = Array.from(images)
let mainWord = document.getElementById('mainWord')
let shower = document.getElementById('shower')
// let testImage = document.getElementById('testImage')
// let imagesId = document.getElementById('imagesId')
let rightScoreValue=document.getElementById('rightScoreValue')
let wrongScoreValue=document.getElementById('wrongScoreValue')
let wordNumber = document.getElementById('wordNumber')
// let btn = document.getElementById('btn')
// let audio = document.getElementById('audio')
let body = document.getElementById('body')
// let mainContainer = document.getElementById('imagetotest')
let gifSource = './rightanswer.gif'
let gifContainer = document.createElement('div')
gifContainer.setAttribute('id', 'fireWork')




// gifContainer.setAttribute('id', 'fireWork')

let PlayButton = document.getElementById('playButton')
let SpeakAloud = document.getElementById('speakAloud')

let mainwordlink = document.getElementById('mainwordlink')

let scroolup = document.getElementById('scroolup')
/* images for elements */
let Desperate = './desperate.png'
let Melancholy = './melancholy.png'
let Strangle = './strangle.jpg'
let Gulp = './gulp.gif'
let Musty = './musty.jpg'
let Startled = './astonishing.jpeg'
let Trepidation = './trapidation.jpg'
let Indignant = './indignant.jpeg';
let Audacity = 'audacity.jpg';
let Poised = './poised.jpg';
let Fist = './fist.jpeg';
let Inoculate = './inoculate.png';
let Despite = './despite.png'
let Peace = './peace.png';
let Lodge = './imbue.jpg';
let Wisdom = './wisdom.png';
let lurk = './lurk.jpg';
let Ailment = './ailment.webp';
let Overwhelmed = './overwhelmed.webp';
let Embarrassed = './embarrassed.jpg';
let Nectar = './nectar.png'
let Misery = './disgruntled.jpg'
let Treasure = './treasure.jpeg'
let Superstition = './superstition.jpg'
let Incipient = './incipient.png'
let Perspiration = './perspiration.jpg'
let Trembling = './tremble.gif'
let Despair = './disgruntled.jpg'
let Intrude = './intrude.png'
let Dismay = './disgruntled.jpg'
let Decree = './decree.png'
let Extract = './extract.jpg'
let Yearning = './yearning.jpeg'
let longing = './yearning.jpeg'
let Prosperity = 'prosperity.webp'
let Evil = './evil.jpeg'
let Astonishing = './astonishing.jpeg'
let Controversy = './controversy.png'
let Approach = './approach.gif'
let Porch = './porch.webp'
let Accomplish = './accomplish.png'
let Sloth = './sloth.gif'
let Oblivious = './oblivious.jpg'
let Accurate = './accurate.png'
let Heal = './heal.gif'
let Soul = './soul.webp'
let Remedy = './remedy.png'
let Recognize = './recongnize.webp'
let Merely = 'merely.png'
let Vary = './vary.jpeg'
let Banish = 'banish.webp'
let Exile = './banish.webp'
let Perpetuate = './perpetuate.jpg'
let Aghast = './aghast.jpg'
let Occult = './occult.webp'
let Conviction = './conviction.png'
let Ruminate = './ruminate.png'
let Dissipate = './dissipate.jpg'
let Excess = './excess.png'
let Doom = './doom.png'
let Gloomy = './gloomy.jpg'
let Impediment = './impediment.jpeg'
let Stymied = './impediment.jpeg'
let Analysis = './analysis.png'
let Tendency = './tendency.png'
let Make_Use = './make use.png'
let Combine = './combine.webp'
let Vital = './vital.png'
let Idle = './idle.jpg'
let Guts = 'guts.jpeg'
let Exploit = './exploit.jpg'
let Explode = './explode.gif'
let Terrible = './terrible.jpg'
let Aquatic = './aquatic.webp'
let Pale = './sorrow.png'
let Fork = './fork.webp'
let Intention = './intention.png'
let Marvel = 'marvel.png'
let Awe = './awe.webp'
let Verdict = './verdict.jpg'
let Poison = './poison.webp'
let Wreak_Havoc = './wreak havoc.jpg'
let Count_On = './count on.jpg'
let Chatty = './voluble.webp'
let Replenish = './replenish.webp'
let Huge = './huge.jpg'
let Hasten = './hasten.jpg'
let Peculiar = './peculiar.jpg'
let Amenable = 'amenable.gif'
let Potent = './potent.jpg'
let Crippled = './crippled.jpg'
let Antagonist = './adversary.jpg'
let Imbue = './imbue.jpg'
let Despondent = './despondent.jpg'
let Foresee = './foresee.webp'
let Convalescence = './convalescence.webp'
let Spurn = './spurn.jpg'
let Vexing = './vexing.jpeg'
let Stagnate = './stagnate.jpg'
let Hunt = './hunt.webp'
let Explore = './explore.jpg'
let Discern = './discern.jpeg'
let Loyal = './loyal.jpg'
let Alter = './alter.png'
let Leisure = './leisure.jpeg'
let Belligerent = './belligerent.jpeg'
let Gush = './gush.gif'
let Caveat = './menace.png'
let Indispensable = './indispensable.jpeg'
let Provision = './provision.jpg'
let Timid = './timid.png'
let Janitor = './janitor.jpg'
let Agony = './agony.avif'
let Jeer = './jeer.jpg'
let Predicament = './predicament.jpg'
let Vague = './vague.jpg'
let Perpetrate = './perpetrate.png'
let Nag = './nag.webp'
let Coaxing = './coaxing.png'
let Ecstasy = './ecstasy.jpg'
let Erudite = './erudite.jpg'
let Detriment = './detriment.png'
let Savagely = './savagely.gif'
let Squander = './squander.webp'
let Flair = './flair.gif'
let Captivating = './captivating.png'
let Corridor = './corridor.jpg'
let Fuss = './fuss.png'
let Infer = './infer.webp'
let Rumour = './rumour.png'
let Guilty = 'guilty.png'
let Crawling = './crawling.jpg'
let Slum = './slum.avif'
let Denounce = './denounce.jpeg'
let Admonition = './admonition.png'
let Snub = './humuliate.jpg'
let Berate = './berate.jpeg'
let Exuberant = './exuberant.jpg'
let Sorrow = './sorrow.png'
let Frantic = './frantic.jpeg'
let Drudgery = './drudgery.jpg'
let Poking = './poking.jpeg'
let Nudging = './poking.jpeg'
let Ravages = './ravage.jpg'
let Disgruntled = './disgruntled.jpg'
let Incinerate = './incinerate.png'
let Defy = './defy.png'
let Exhort = './exhort.png'
let Consternation = './consternation.jpg'
let Incensed = './incensed.jpg'
let Menace = './menace.png'
let Amend = './amend.png'
let Credibility = './credibility.png'
let Contrived = './contrived.png'
let Anxiety = './frantic.jpeg'
let Bald = './bald.jpeg'
let Uncanny = './uncanny.png'
let Antagonize = './antagonize.png'
let Flattery = './flattery.png'
let Delirious = './delirious.gif'
let Adroit = './adroit.jpg'
let Outset = './outset.jpg'
let Irate = './irate.jpg'
let Candour = './candour.png'
let Hostile = './hostile.jpeg'
let Surreal = './surreal.jpeg'
let Estranged = './estranged.jpg'
let Raconteur = './reconteur.jpeg'
let Alleviate = './alleviate.jpeg'
let Nauseating = './nauseating.jpg'
let Conceit = './conceit.png'
let Tumult = './tumult.jpg'
let Pathetic = './pathetic.png'
let Devour = './devour.gif'
let Monotonous = './monotonious.webp'
let Ensure = './ensure.png'
let Spit = './spit.jpg'
let Voluble = './voluble.webp'
let Infallible = './infallible.jpg'
let Malign = './malign.jpeg'
let Counterfeit = './counterfeit.jpg'
let Impertinent = './impertinent.jpg'
let Brag = './brag.jpg'
let Adversary = './adversary.jpg'
let Shabby = './pathetic.png'
let Illicit = './illicit.jpg'
let Cringe = './cringe.jpg'
let Flaw = './flaw.jpg'
let Brief = './brief.png'
let Capture = './capture.gif'
let Deny = './deny.webp'
let Flesh = './flesh.jpeg'
let Garlic = './garlic.jpg'
let Mustard = './mustard.jpeg'
let Turmeric = './turmeric.jpeg'
let Cinnamon = './cinnamon.jpg'
let Cardamom = './cardamom.jpg'
let Cumin = './cumin.webp'
let Lime = './lime.jpeg'
let Chin = './chin.jpg'
let Chest = './chest.jpg'
let Stomach = './stomach.png'
let Knee = './knee.webp'
let Toe = './toe.jpg'
let Jaw = './jaw.jpg'
let Cheek = './cheek.jpg'
let Almond = './almond.jpeg'
let Dates = './dates.webp'
let Claw = './claw.jpg'
let Fair = './fair.jpg'
let Fare = './fare.jpg'
let Shelf = './shelf.jpg'
let Effort = './effort.gif'
let Effect = './effect.png'
let Ancestor = './ancestor.png'
let Daring = './daring.webp'
let Influence = './influence.jpeg'
let Basking = './basking.webp'
let Preposterous = './preposterous.jpg'
let Desert = './desert.webp'
let Conceal = './conceal.jpg'
let Roaming = './roaming.gif'
let Deplete = './deplete.jpg'
let Wise = './erudite.jpg'
let Pertain = './pertain.jpg'
let Tantalizing = './tantalizing.png'
let Bluff = './bluff.jpg'
let Counteract = './counteract.jpg'
let Mitigate = './mitigate.webp'
let Palliate = './mitigate.webp'
let Extenuate = './mitigate.webp'
let Instill = './instill.jpg'
let Raze = './raze.jpg'
let Enthusiasm = './enthusiasm.png'
let Manipulate = './manipulate.jpg'
let Impact = './impact.jpeg'
let Humiliate = './humuliate.jpg'
let Conspiracy = './conspiracy.webp'
let Succumb = './succumb.webp'
let Atrocity = './atrocity.jpg'
let Naive = './naive.jpg'
let Violate = './voilate.gif'
let Scorpion = './scorpian.jpg'
let Swift = './swift.gif'
let Rapid = './swift.gif'
let Dawdle = './dawdle.jpg'
let Brutal = './brutal.jpg'
let Credit = './credit.png'
let Debit = './debit.png'
let Deposit = './deposit.png'
let Amulet = './amulet.webp'
let Incense = './incense.webp'
let Supper = './supper.webp'
let Slumber = './slumber.png'
let Cynical = './cynical.jpg'
let Sneer = './sneer.jpg'
let Perpetually = './perpetually.webp'
let Incessant = './perpetually.webp'
let Pervade = './pervade.webp'
let Tranquility = './tranquility.webp'
let Trammel = './trammel.jpg'
let Trample = './tramle.jpg'
let Rectify = './rectify.webp'
let Extend = './extend.webp'
let Prevalent = './prevalent.webp'
let Fragment = './fragment.jpg'
let Feed = './feed.jpg'
let Withstand = './withstand.jpg'
let Pursuit = './pursuit.jpg'
let Devoid = './devoid.jpg'
let Devote = './devote.webp'
let Chide = './chide.webp'
let Pragmatist = './pragmatist.jpg'
let Departure = './departure.gif'
let Arrive = './arrive.jpg'
let Urge = './urge.webp'
let Tenacity = './tenacity.jpg'
let Persistence = './tenacity.jpg'
let Determination = './tenacity.jpg'
let Confer = './confer.webp'
let Welfare = './welfare.png'
let Boon = './boon.jpg'
let Prestige = './prestige.gif'
let Peasant = './peasant.jpg'
let Scrub = './scrub.gif'
let Pollute = './pollute.gif'
let Discrimination = './discrimination.jpg'
let Petition = './petition.jpg'
let Ordeal = './ordeal.webp'
let Staggering = './staggering.jpg'
let Purports = './purports.jpg'
let Queue = './cue.jpg'
let Curse = './curse.jpg'
let Tactics = './tactics.jpg'
let Marginalize = './marginalize.jpg'
let Alienate = './marginalize.jpg'
let Defiant = './defiant.jpg'
let Affection = './affection.jpg'
let Covetous = './covetous.jpg'
let Dismal = './sorrow.png'
let Pharmacist = './pharmacist.avif'
let Ginger = './ginger.jpg'
let Coriander = './coriander.jpg'
let Nab = './nab.jpg'
let Credited = './credited.png'
Verdict
//audio for elements
let desperateAudio = './desperate.mp3'
let gulpAudio = './gulp.mp3'
let melancholyAudio = './melancholy.mp3'
let strangleAudio = './strangle.mp3'
let mustyAudio = './musty.mp3'
let startledAudio = './startled.mp3'
let trepidationAudio = './trepidation.mp3'
let indignantAudio = './indignant.mp3'
let audacityAudio = './audacity.mp3'
let poisedAudio = './poised.mp3'
let fistAudio = './fist.mp3'
let inoculateAudio = './inoculate.mp3'
let despiteAudio = './despite.mp3'
let healAudio = './heal.mp3'
let peaceAudio = './peace.mp3'
let lodgeAudio = './lodge.mp3'
let wisdomAudio = './wisdom.mp3'
let lurkAudio = './lurk.mp3'
let ailmentAudio = './ailment.mp3'
let overwhelmedAudio = './overwhelm.mp3'
let embarrassedAudio = './embarrassed.mp3'
let nectarAudio = './nectar.mp3'
let MiseryAudio = './misery.mp3'
let treasureAudio = './treasure.mp3'
let superstitionAudio = './superstition.mp3'
let incipientAudio = './incipient.mp3'
let perspirationAudio = './perspiration.mp3'
let trembleAudio = './trembling.mp3'
let despairAudio = './despair.mp3'
let intrudeAudio = './intrude.mp3'
let dismayAudio = './dismay.mp3'
let decreeAudio = './decree.mp3'
let extractAudio = './extract.mp3'
let yearningAudio = './yearning.mp3'
let longingAudio = './longing.mp3'
let prosperityAudio = './prosperity.mp3'
let evilAudio = './evil.mp3'
let astonishingAudio = './astonishing.mp3'
let controversyAudio = './controversy.mp3'
let approachAudio = './approach.mp3'
let porchAudio = './porch.mp3'
let accomplishAudio = './accomplish.mp3'
let slothAudio = './sloth.mp3'
let obliviousAudio = './oblivious.mp3'
let accurateAudio = './accurate.mp3'
let soulAudio = './soul.mp3'
let remedyAudio = './remedy.mp3'
let recongnizeAudio = './recognize.mp3'
let merelyAudio = './merely.mp3'
let varyAudio = './vary.mp3'
let banishAudio = './banish.mp3'
let ExileAudio = './Exile.mp3'
let perpetuateAudio = './perpetuate.mp3'
let aghastAudio = './aghast.mp3'
let occultAudio = './occult.mp3'
let convictionAudio = './conviction.mp3'
let ruminateAudio = './ruminate.mp3'
let dissipateAudio = './dissipate.mp3'
let excessAudio = './excess.mp3'
let doomAudio = './doom.mp3'
let gloomyAudio = './gloomy.mp3'
let impedimentAudio = './impediment.mp3'
let StymiedAudio = './Stymied.mp3'
let analysisAudio = './analysis.mp3'
let tendencyAudio = './tendency.mp3'
let make_useAudio = './make use.mp3'
let combineAudio = './combine.mp3'
let vitalAudio = './vital.mp3'
let idleAudio = './idle.mp3'
let gutsAudio = './guts.mp3'
let exploitAudio = './exploit.mp3'
let explodeAudio = './explode.mp3'
let terribleAudio = './terrible.mp3'
let aquaticAudio = './aquatic.mp3'
let paleAudio = './pale.mp3'
let forkAudio = './fork.mp3'
let intentionAudio = './intention.mp3'
let marvelAudio = './marvel.mp3'
let aweAudio = './awe.mp3'
let verdictAudio = './verdict.mp3'
let poisonAudio = './poison.mp3'
let WreakHavocAudio = './wreakhavoc.mp3'
let replenishAudio = './replenish.mp3'
let hugeAudio = './huge.mp3'
let hastenAudio = './hasten.mp3'
let peculiarAudio = './peculiar.mp3'
let amenableAudio = './amenable.mp3'
let potentAudio = './potent.mp3'
let crippledAudio = './crippled.mp3'
let antagonistAudio = './antagonist.mp3'
let imbueAudio = './imbue.mp3'
let despondentAudio = './despondent.mp3'
let foreseeAudio = './foresee.mp3'
let ConvalescenceAudio = './Convalescence.mp3'
let spurnAudio = './spurn.mp3'
let vexingAudio = './vexing.mp3'
let stagnateAudio = './stagnate.mp3'
let huntAudio = './hunt.mp3'
let exploreAudio = './explore.mp3'
let discernAudio = './discern.mp3'
let loyalAudio = './loyal.mp3'
let alterAudio = './alter.mp3'
let leisureAudio = './leisure.mp3'
let belligerentAudio = './belligerent.mp3'
let gushAudio = './gush.mp3'
let caveatAudio = './caveat.mp3'
let indispensableAudio = './indispensable.mp3'
let provisionAudio = './provision.mp3'
let timidAudio = './timid.mp3'
let janitorAudio = './janitor.mp3'
let agonyAudio = './agony.mp3'
let jeerAudio = './jeer.mp3'
let predicamentAudio = './predicament.mp3'
let vagueAudio = './vague.mp3'
let perpetrateAudio = './perpetrate.mp3'
let nagAudio = './nag.mp3'
let coaxingAudio = './coaxing.mp3'
let ecstasyAudio = './ecstasy.mp3'
let eruditeAudio = './erudite.mp3'
let detrimentAudio = './detriment.mp3'
let savagelyAudio = './savagely.mp3'
let squanderAudio = './squander.mp3'
let flairAudio = './flair.mp3'
let captivatingAudio = './captivating.mp3'
let corridorAudio = './corridor.mp3'
let fussAudio = './fuss.mp3'
let inferAudio = './infer.mp3'
let rumourAudio = './rumour.mp3'
let count_onAudio = './count on.mp3'
let guiltyAudio = './guilty.mp3'
let chattyAudio = './chatty.mp3'
let crawlingAudio = './crawling.mp3'
let SlumAudio = './Slum.mp3'
let DenounceAudio = './denounce.mp3'
let AdmonitionAudio = './Admonition.mp3'
let SnubAudio = './Snub.mp3'
let BerateAudio = './Berate.mp3'
let ExuberantAudio = './Exuberant.mp3'
let SorrowAudio = './Sorrow.mp3'
let FranticAudio = './Frantic.mp3'
let DrudgeryAudio = './Drudgery.mp3'
let PokingAudio = './Poking.mp3'
let NudgingAudio = './Nudging.mp3'
let RavagesAudio = './Ravages.mp3'
let DisgruntledAudio = './Disgruntled.mp3'
let IncinerateAudio = './Incinerate.mp3'
let DefyAudio = './Defy.mp3'
let ExhortAudio = './exhort.mp3'
let ConsternationAudio = './Consternation.mp3'
let IncensedAudio = './Incensed.mp3'
let MenaceAudio = './Menace.mp3'
let AmendAudio = './Amend.mp3'
let CredibilityAudio = './Credibility.mp3'
let ContrivedAudio = './Contrived.mp3'
let AnxietyAudio = './Anxiety.mp3'
let BaldAudio = './Bald.mp3'
let UncannyAudio = './Uncanny.mp3'
let FlatteryAudio = './Flattery.mp3'
let DeliriousAudio = './Delirious.mp3'
let AdroitAudio = './Adroit.mp3'
let OutsetAudio = './Outset.mp3'
let IrateAudio = './Irate.mp3'
let CandourAudio = './Candour.mp3'
let HostileAudio = './Hostile.mp3'
let SurrealAudio = './Surreal.mp3'
let EstrangedAudio = './Estranged.mp3'
let RaconteurAudio = './Raconteur.mp3'
let AlleviateAudio = './Alleviate.mp3'
let NauseatingAudio = './Nauseating.mp3'
let ConceitAudio = './Conceit.mp3'
let TumultAudio = './Tumult.mp3'
let PatheticAudio = './Pathetic.mp3'
let DevourAudio = './Devour.mp3'
let MonotonousAudio = './Monotonous.mp3'
let EnsureAudio = './Ensure.mp3'
let SpitAudio = './Spit.mp3'
let VolubleAudio = './Voluble.mp3'
let InfallibleAudio = './Infallible.mp3'
let malignAudio = './malign.mp3'
let CounterfeitAudio = './Counterfeit.mp3'
let ImpertinentAudio = './Impertinent.mp3'
let BragAudio = './Brag.mp3'
let AdversaryAudio = './Adversary.mp3'
let ShabbyAudio = './Shabby.mp3'
let IllicitAudio = './Illicit.mp3'
let CringeAudio = './Cringe.mp3'
let FlawAudio = './Flaw.mp3'
let BriefAudio = './Brief.mp3'
let CaptureAudio = './Capture.mp3'
let DenyAudio = './Deny.mp3'
let FleshAudio = './Flesh.mp3'
let GarlicAudio = './Garlic.mp3'
let MustardAudio = './Mustard.mp3'
let TurmericAudio = './Turmeric.mp3'
let CinnamonAudio = './Cinnamon.mp3'
let CuminAudio = './Cumin.mp3'
let LimeAudio = './Lime.mp3'
let ChinAudio = './Chin.mp3'
let ChestAudio = './Chest.mp3'
let StomachAudio = './Stomach.mp3'
let KneeAudio = './Knee.mp3'
let ToeAudio = './Toe.mp3'
let JawAudio = './Jaw.mp3'
let CheekAudio = './Cheek.mp3'
let AlmondAudio = './Almond.mp3'
let datesAudio = './dates.mp3'
let ClawAudio = './Claw.mp3'
let FareAudio = './Fare.mp3'
let FairAudio = './Fair.mp3'
let ShelfAudio = './Shelf.mp3'
let EffortAudio = './Effort.mp3'
let EffectAudio = './Effect.mp3'
let AncestorAudio = './Ancestor.mp3'
let DaringAudio = './Daring.mp3'
let InfluenceAudio = './Influence.mp3'
let BaskingAudio = './Basking.mp3'
let PreposterousAudio = './Preposterous.mp3'
let DesertAudio = './Desert.mp3'
let ConcealAudio = './Conceal.mp3'
let RoamingAudio = './Roaming.mp3'
let DepleteAudio = './Deplete.mp3'
let WiseAudio = './Wise.mp3'
let PertainAudio = './Pertain.mp3'
let TantalizingAudio = './Tantalizing.mp3'
let BluffAudio = './Bluff.mp3'

poisonAudio

let CounteractAudio = './Counteract.mp3'
let PalliateAudio = './Palliate.mp3'
let MitigateAudio = './Mitigate.mp3'
let ExtenuateAudio = './Extenuate.mp3'
let InstillAudio = './Instill.mp3'
let RazeAudio = './Raze.mp3'
let EnthusiasmAudio = './Enthusiasm.mp3'
let ManipulateAudio = './Manipulate.mp3'
let ImpactAudio = './Impact.mp3'
let HumiliateAudio = './Humiliate.mp3'
let ConspiracyAudio = './Conspiracy.mp3'
let SuccumbAudio = './Succumb.mp3'
let AtrocityAudio = './Atrocity.mp3'
let NaiveAudio = './Naive.mp3'
let ViolateAudio = './Violate.mp3'
let ScorpionAudio = './Scorpion.mp3'
let SwiftAudio = './Swift.mp3'
let RapidAudio = './Rapid.mp3'
let DawdleAudio = './Dawdle.mp3'
let BrutalAudio = './Brutal.mp3'
let CreditAudio = './Credit.mp3'
let DebitAudio = './Debit.mp3'
let DepositAudio = './Deposit.mp3'
let AmuletAudio = './Amulet.mp3'
let IncenseAudio = './Incense.mp3'
let SupperAudio = './Supper.mp3'
let SlumberAudio = './Slumber.mp3'
let CynicalAudio = './Cynical.mp3'
let SneerAudio = './Sneer.mp3'
let PerpetuallyAudio = './Perpetually.mp3'
let IncessantAudio = './Incessant.mp3'
let PervadeAudio = './Pervade.mp3'
let TranquilityAudio = './Tranquility.mp3'
let TrammelAudio = './Trammel.mp3'
let TrampleAudio = './Trample.mp3'
let RectifyAudio = './Rectify.mp3'
let ExtendAudio = './Extend.mp3'
let PrevalentAudio = './Prevalent.mp3'
let FragmentAudio = './Fragment.mp3'
let FeedAudio = './Feed.mp3'
let WithstandAudio = './Withstand.mp3'
let PursuitAudio = './Pursuit.mp3'
let DevoidAudio = './Devoid.mp3'
let DevoteAudio = './Devote.mp3'
let ChideAudio = './Chide.mp3'
let PragmatistAudio = './Pragmatist.mp3'
let DepartureAudio = './Departure.mp3'
let ArriveAudio = './Arrive.mp3'
let TenacityAudio = './Tenacity.mp3'
let PersistenceAudio = './Persistence.mp3'
let DeterminationAudio = './Determination.mp3'
let ConferAudio = './Confer.mp3'
let WelfareAudio = './Welfare.mp3'
let BoonAudio = './Boon.mp3'
let PrestigeAudio = './Prestige.mp3'
let PeasantAudio = './Peasant.mp3'
let ScrubAudio = './Scrub.mp3'
let PolluteAudio = './Pollute.mp3'
let DiscriminationAudio = './Discrimination.mp3'
let PetitionAudio = './Petition.mp3'
let OrdealAudio = './Ordeal.mp3'
let StaggeringAudio = './Staggering.mp3'
let PurportsAudio = './Purports.mp3'
let QueueAudio = './Queue.mp3' // audio is not present
let CurseAudio = './Curse.mp3'
let TacticsAudio = './Tactics.mp3'
let MarginalizeAudio = './Marginalize.mp3'
let AlienateAudio = './Alienate.mp3'
let DefiantAudio = './Defiant.mp3'
let AffectionAudio = './Affection.mp3'
let CovetousAudio = './Covetous.mp3'
let DismalAudio = './Dismal.mp3'
let PharmacistAudio = './Pharmacist.mp3'
let GingerAudio = './Ginger.mp3'
let CorianderAudio = './Coriander.mp3'
let NabAudio = './Nab.mp3'
let CreditedAudio = './Credited.mp3'
let UrgeAudio = './Urge.mp3'










// asli mall yaha se suru  hai


let intialRightScore
let intialWrongScore


// for right score
if(sessionStorage.getItem('rightScore')==0){
    intialRightScore=0
    rightScoreValue.textContent=intialRightScore
}
else(
    intialRightScore=sessionStorage.getItem('rightScore')
)

// for worng score

if(sessionStorage.getItem('wrongScore')==0){
    intialWrongScore=0
    wrongScoreValue.textContent=intialWrongScore
}
else(
    intialWrongScore=sessionStorage.getItem('wrongScore')
)

rightScoreValue.textContent=0
wrongScoreValue.textContent=0

let retrievedRightScore=sessionStorage.getItem('rightScore')
let retrievedWrongScore=sessionStorage.getItem('wrongScore')
// adding rightScore to the session storage
if(retrievedRightScore===null){
    var scoreValueRight=0
    sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
}
else{
    scoreValueRight=JSON.parse(retrievedRightScore)
    rightScoreValue.textContent=scoreValueRight
}

// adding wrongScore to the session storage

if(retrievedWrongScore===null){
    var scoreValueWrong=0
    sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
}
else{
    scoreValueWrong=JSON.parse(retrievedWrongScore)
    wrongScoreValue.textContent=scoreValueWrong
}

// vocabulary array

let vocabArray = ['Desperate', 'Gulp', 'Melancholy', 'Strangle', 'Musty', 'Startled', 'Trepidation', 'Indignant', 'Audacity', 'Poised', 'Fist', 'Inoculate',
    'Despite', 'Heal', 'Peace', 'Lodge', 'Wisdom', 'lurk', 'Ailment', 'Overwhelmed', 'Embarrassed', 'Nectar', 'Misery', 'Treasure', 'Superstition',
    'Incipient', 'Perspiration', 'Trembling', 'Despair', 'Intrude', 'Dismay', 'Decree', 'Extract', 'Yearning', 'longing', 'Prosperity', 'Evil',
    'Astonishing', 'Controversy', 'Approach', 'Porch', 'Accomplish', 'Sloth', 'Oblivious', 'Accurate', 'Soul', 'Remedy',
    'Recognize', 'Merely', 'Vary', 'Banish', 'Exile', 'Perpetuate', 'Aghast', 'Occult', 'Conviction', 'Ruminate', 'Dissipate', 'Excess', 'Doom',
    'Gloomy', 'Impediment', 'Stymied', 'Analysis', 'Tendency', 'Make_Use', 'Combine', 'Vital', 'Idle', 'Guts', 'Exploit', 'Explode', 'Terrible',
    'Aquatic', 'Pale', 'Fork', 'Intention', 'Marvel', 'Awe', 'Verdict', 'Poison', 'Wreak_Havoc', 'Replenish', 'Huge', 'Hasten', 'Peculiar',
    'Amenable', 'Potent', 'Crippled', 'Antagonist', 'Imbue', 'Despondent', 'Foresee',
    'Convalescence', 'Spurn', 'Vexing', 'Stagnate', 'Hunt', 'Explore', 'Discern', 'Loyal', 'Alter', 'Leisure', 'Belligerent', 'Gush',
    'Caveat', 'Indispensable', 'Provision', 'Timid', 'Janitor', 'Agony', 'Jeer', 'Predicament', 'Vague', 'Perpetrate', 'Nag', 'Coaxing',
    'Ecstasy', 'Erudite', 'Detriment', 'Savagely', 'Squander', 'Flair',
    'Captivating', "Corridor", "Fuss", 'Infer', 'Rumour', 'Count_On', 'Guilty', 'Chatty', 'Crawling', 'Slum', 'Denounce', 'Admonition',
    'Snub', 'Berate', 'Exuberant', 'Sorrow', 'Frantic', 'Drudgery', 'Poking', 'Nudging', 'Ravages', 'Disgruntled',
    'Incinerate', 'Defy', 'Exhort', 'Consternation', 'Incensed', 'Menace', 'Amend', 'Credibility', 'Contrived', 'Anxiety', 'Bald', 'Uncanny',
    'Flattery', 'Delirious', 'Adroit', 'Outset', 'Irate', 'Candour', 'Hostile',
    'Surreal', 'Estranged', 'Raconteur', 'Alleviate', 'Nauseating', 'Conceit', 'Tumult', 'Pathetic', 'Devour', 'Monotonous', 'Ensure',
    'Spit', 'Voluble', 'Infallible', 'Malign', 'Counterfeit', 'Impertinent', 'Brag', 'Adversary', 'Shabby', 'Illicit', 'Cringe', 'Flaw',
    'Brief', 'Capture', 'Deny', 'Flesh', 'Garlic', 'Mustard', 'Turmeric',
    'Cinnamon', 'Cumin', 'Lime', 'Chin', 'Chest', 'Stomach', 'Knee', 'Toe', 'Jaw', 'Cheek', 'Almond', 'Dates', 'Claw', "Fare", "Fair", 'Shelf', 'Effort'
    , 'Effect', 'Ancestor', 'Daring', 'Influence', 'Basking', 'Preposterous', 'Desert', 'Conceal', 'Roaming', 'Deplete', 'Wise', 'Pertain', 'Tantalizing', 'Bluff', 
    'Counteract',
    'Palliate', 'Mitigate', 'Extenuate', 'Instill', 'Raze', 'Enthusiasm', 'Manipulate', 'Impact', 'Humiliate', 'Conspiracy', 'Succumb', 'Atrocity', 'Naive',
    'Violate', 'Scorpion', 'Swift', 'Rapid', 'Dawdle', 'Brutal', 'Credit', 'Debit', 'Deposit', 'Amulet', 'Incense', 'Supper', 'Slumber', 'Cynical', 'Sneer',
    'Perpetually', 'Incessant', 'Pervade', 'Tranquility', 'Trammel', 'Trample', 'Rectify', 'Extend', 'Prevalent', 'Fragment', 'Feed', 'Withstand', 'Pursuit',
    'Devoid', 'Devote', 'Chide', 'Pragmatist', 'Departure', 'Arrive', 'Urge', 'Tenacity', 'Persistence', 'Determination', 'Confer', 'Welfare', 'Boon', 'Prestige',
    'Peasant', 'Scrub', 'Pollute', 'Discrimination', 'Petition', 'Ordeal', 'Staggering', 'Purports', 'Queue', 'Curse', 'Tactics', 'Marginalize', 'Alienate',
    'Defiant', 'Affection', 'Covetous', 'Dismal', 'Pharmacist', 'Ginger', 'Coriander', 'Nab', 'Credited'



]



let ArrayOfImages = [Desperate, Gulp, Melancholy, Strangle, Musty, Startled, Trepidation, Indignant, Audacity, Poised, Fist, Inoculate,
    Despite, Heal, Peace, Lodge, Wisdom, lurk, Ailment, Overwhelmed, Embarrassed, Nectar, Misery, Treasure, Superstition,
    Incipient, Perspiration, Trembling, Despair, Intrude, Dismay, Decree, Extract, Yearning, longing, Prosperity, Evil,
    Astonishing, Controversy, Approach, Porch, Accomplish, Sloth, Oblivious, Accurate, Soul, Remedy,
    Recognize, Merely, Vary, Banish, Exile, Perpetuate, Aghast, Occult, Conviction, Ruminate, Dissipate, Excess, Doom,
    Gloomy, Impediment, Stymied, Analysis, Tendency, Make_Use, Combine, Vital, Idle, Guts, Exploit, Explode, Terrible,
    Aquatic, Pale, Fork, Intention, Marvel, Awe, Verdict, Poison, Wreak_Havoc, Replenish,
    Huge, Hasten, Peculiar, Amenable, Potent, Crippled, Antagonist, Imbue, Despondent, Foresee,
    Convalescence, Spurn, Vexing, Stagnate, Hunt, Explore, Discern, Loyal, Alter, Leisure, Belligerent, Gush, Caveat, Indispensable, Provision,
    Timid, Janitor, Agony, Jeer, Predicament, Vague, Perpetrate, Nag, Coaxing, Ecstasy, Erudite, Detriment, Savagely, Squander, Flair,
    Captivating, Corridor, Fuss, Infer, Rumour, Count_On, Guilty, Chatty, Crawling, Slum, Denounce, Admonition, Snub, Berate, Exuberant,
    Sorrow, Frantic, Drudgery, Poking, Nudging, Ravages, Disgruntled, Incinerate, Defy, Exhort, Consternation, Incensed, Menace,
    Amend, Credibility, Contrived, Anxiety, Bald, Uncanny, Flattery, Delirious, Adroit, Outset, Irate, Candour, Hostile,
    Surreal, Estranged, Raconteur, Alleviate, Nauseating, Conceit, Tumult, Pathetic, Devour, Monotonous, Ensure, Spit, Voluble, Infallible,
    Malign, Counterfeit, Impertinent, Brag, Adversary, Shabby, Illicit, Cringe, Flaw, Brief, Capture, Deny, Flesh, Garlic, Mustard, Turmeric,
    Cinnamon, Cumin, Lime, Chin, Chest, Stomach, Knee, Toe, Jaw, Cheek, Almond, Dates, Claw, Fare, Fair, Shelf, Effort, Effect, Ancestor, Daring, Influence,
    Basking, Preposterous, Desert, Conceal, Roaming, Deplete, Wise, Pertain, Tantalizing, Bluff, Counteract, Palliate, Mitigate, Extenuate, Instill,
    Raze, Enthusiasm, Manipulate, Impact, Humiliate, Conspiracy, Succumb, Atrocity, Naive, Violate, Scorpion, Swift, Rapid, Dawdle,
    Brutal, Credit, Debit, Deposit, Amulet, Incense, Supper, Slumber, Cynical, Sneer, Perpetually, Incessant, Pervade, Tranquility,
    Trammel, Trample, Rectify, Extend, Prevalent, Fragment, Feed, Withstand, Pursuit, Devoid, Devote, Chide, Pragmatist, Departure, Arrive,
    Urge, Tenacity, Persistence, Determination, Confer, Welfare, Boon, Prestige, Peasant, Scrub, Pollute, Discrimination, Petition, Ordeal,
    Staggering, Purports, Queue, Curse, Tactics, Marginalize, Alienate, Defiant, Affection, Covetous, Dismal, Pharmacist,
    Ginger, Coriander, Nab, Credited


]



let header = document.getElementById('header')



// ARRAY OF IMAGES
ConvalescenceAudio

let ArrayOfAudios = [
    desperateAudio, gulpAudio, melancholyAudio, strangleAudio, mustyAudio, startledAudio, trepidationAudio, indignantAudio,
    audacityAudio, poisedAudio, fistAudio, inoculateAudio, despiteAudio, healAudio, peaceAudio, lodgeAudio, wisdomAudio, lurkAudio, ailmentAudio, overwhelmedAudio, embarrassedAudio,
    nectarAudio, MiseryAudio, treasureAudio, superstitionAudio, incipientAudio, perspirationAudio, trembleAudio, despairAudio, intrudeAudio, dismayAudio, decreeAudio, extractAudio,
    yearningAudio, longingAudio, prosperityAudio, evilAudio, astonishingAudio, controversyAudio, approachAudio, porchAudio, accomplishAudio, slothAudio, obliviousAudio, accurateAudio, soulAudio,
    remedyAudio, recongnizeAudio, merelyAudio, varyAudio, banishAudio, ExileAudio, perpetuateAudio, aghastAudio, occultAudio, convictionAudio, ruminateAudio, dissipateAudio,
    excessAudio, doomAudio, gloomyAudio, impedimentAudio, StymiedAudio, analysisAudio, tendencyAudio, make_useAudio, combineAudio, vitalAudio, idleAudio, gutsAudio, exploitAudio,
    explodeAudio, terribleAudio, aquaticAudio, paleAudio, forkAudio, intentionAudio, marvelAudio, aweAudio, verdictAudio, poisonAudio, WreakHavocAudio, replenishAudio, hugeAudio,
    hastenAudio, peculiarAudio, amenableAudio, potentAudio, crippledAudio, antagonistAudio, imbueAudio, despondentAudio, foreseeAudio, ConvalescenceAudio, spurnAudio, vexingAudio,
    stagnateAudio, huntAudio, exploreAudio, discernAudio, loyalAudio, alterAudio, leisureAudio, belligerentAudio, gushAudio, caveatAudio, indispensableAudio, provisionAudio,
    timidAudio, janitorAudio, agonyAudio, jeerAudio, predicamentAudio, vagueAudio, perpetrateAudio, nagAudio, coaxingAudio, ecstasyAudio, eruditeAudio, detrimentAudio, savagelyAudio,
    squanderAudio, flairAudio, captivatingAudio, corridorAudio, fussAudio, inferAudio, rumourAudio, count_onAudio, guiltyAudio, chattyAudio, crawlingAudio, SlumAudio, DenounceAudio,
    AdmonitionAudio, SnubAudio, BerateAudio, ExuberantAudio, SorrowAudio, FranticAudio, DrudgeryAudio, PokingAudio, NudgingAudio, RavagesAudio, DisgruntledAudio,
    IncinerateAudio, DefyAudio, ExhortAudio, ConsternationAudio, IncensedAudio, MenaceAudio, AmendAudio, CredibilityAudio, ContrivedAudio, AnxietyAudio, BaldAudio, UncannyAudio,
    FlatteryAudio, DeliriousAudio, AdroitAudio, OutsetAudio, IrateAudio, CandourAudio, HostileAudio, SurrealAudio, EstrangedAudio, RaconteurAudio, AlleviateAudio,
    NauseatingAudio, ConceitAudio, TumultAudio, PatheticAudio, DevourAudio, MonotonousAudio, EnsureAudio, SpitAudio, VolubleAudio, InfallibleAudio, malignAudio,
    CounterfeitAudio, ImpertinentAudio, BragAudio, AdversaryAudio, ShabbyAudio, IllicitAudio, CringeAudio, FlawAudio, BriefAudio, CaptureAudio, DenyAudio, FleshAudio,
    GarlicAudio, MustardAudio, TurmericAudio, CinnamonAudio, CuminAudio, LimeAudio, ChinAudio, ChestAudio, StomachAudio, KneeAudio, ToeAudio, JawAudio, CheekAudio, AlmondAudio,
    datesAudio, ClawAudio, FareAudio, FairAudio, ShelfAudio, EffortAudio, EffectAudio, AncestorAudio, DaringAudio, InfluenceAudio, BaskingAudio,
    PreposterousAudio, DesertAudio, ConcealAudio, RoamingAudio, DepleteAudio, WiseAudio, PertainAudio, TantalizingAudio, BluffAudio, CounteractAudio, PalliateAudio,
    MitigateAudio, ExtenuateAudio, InstillAudio,
    RazeAudio, EnthusiasmAudio, ManipulateAudio, ImpactAudio, HumiliateAudio, ConspiracyAudio, SuccumbAudio, AtrocityAudio, NaiveAudio, ViolateAudio, ScorpionAudio,
    SwiftAudio, RapidAudio, DawdleAudio,
    BrutalAudio, CreditAudio, DebitAudio, DepositAudio, AmuletAudio, IncenseAudio, SupperAudio, SlumberAudio, CynicalAudio, SneerAudio, PerpetuallyAudio,
    IncessantAudio, PervadeAudio, TranquilityAudio,
    TrammelAudio, TrampleAudio, RectifyAudio, ExtendAudio, PrevalentAudio, FragmentAudio, FeedAudio, WithstandAudio, PursuitAudio, DevoidAudio, DevoteAudio,
    ChideAudio, PragmatistAudio, DepartureAudio, ArriveAudio,
    UrgeAudio, TenacityAudio, PersistenceAudio, DeterminationAudio, ConferAudio, WelfareAudio, BoonAudio, PrestigeAudio, PeasantAudio, ScrubAudio,
    PolluteAudio, DiscriminationAudio, PetitionAudio, OrdealAudio,
    StaggeringAudio, PurportsAudio, QueueAudio, CurseAudio, TacticsAudio, MarginalizeAudio, AlienateAudio, DefiantAudio, AffectionAudio, CovetousAudio,
    DismalAudio, PharmacistAudio,
    GingerAudio, CorianderAudio, NabAudio, CreditedAudio
]





// adding max range code start here here

let maxField=document.getElementById('maxField') // input field of the max input
let submitButton1=document.getElementById('submitButton1')  // submit button for the max and min input field

let maxRetrivedValue=sessionStorage.getItem('maxValueKey') // getting the maxvalue from sessionStorage if it exist

if(maxRetrivedValue===null){
    var b2=302
    sessionStorage.setItem('maxValueKey',b2) // if there is no max value in the sessionStorage setting it equal to 302 i.e length of the wordArray
}

else{
         b2=maxRetrivedValue // if it is present in the sessionStorage saving the value of max in b2
    
}




// ending of  max range code here


// adding min range here

let minField=document.getElementById('minField') // getting the minvalue from sessionStorage if it exist


let minRetrivedValue=sessionStorage.getItem('minValueKey')

if(maxRetrivedValue===null){
    var a2=0
    sessionStorage.setItem('minValueKey',a2)
}

else{
         a2=minRetrivedValue  // if it is present in the sessionStorage saving the value of max in b2
    
}




// some extra code for keeping the max and min range atleast 10 apart then submit it to the sessionStorage
submitButton1.addEventListener('click',(event)=>{
  
    if(maxField.value < minField.value){
        b2 = minField.value
        a2=maxField.value
    }
    else{
        b2 = maxField.value
        a2 = minField.value
    }
    b2 = parseInt(b2)
    a2 = parseInt(a2)
    // if ((b2 - a2) <10){
    //     console.log(a2)
    //     console.log(b2)
    //     console.log(b2-a2)
    //     b2 = a2 +10
    // }
    sessionStorage.setItem('maxValueKey',b2)
    sessionStorage.setItem('minValueKey',a2)
    // refresing the page after the min and max has been set 
   if(document.getElementById('minField').value !="" && document.getElementById('maxField').value !=""){
    event.preventDefault()
    window.location.reload()
   }
})

shower

 //NOTE--- value retrived form sessionStorage are in the form of string so we have to convert into number using perseInt
let b3=parseInt(b2)
b3-- // decreasing by 1 so that it does not go out of index 
let a3=parseInt(a2)
let random2=Math.round(a3+(b3-a3)*Math.random())

let random3=Math.round(a3+(b3-a3)*Math.random())

let random4=Math.round(a3+(b3-a3)*Math.random())

let random5=Math.round(a3+(b3-a3)*Math.random())
let flag=0


let Image1
let Image2
let Image3
let Image4

 while (flag != 1){

     if(ArrayOfImages[random2]!=ArrayOfImages[random3] && ArrayOfImages[random2]!=ArrayOfImages[random4] && ArrayOfImages[random2]!=ArrayOfImages[random5] && ArrayOfImages[random3]!=ArrayOfImages[random4] && ArrayOfImages[random3]!=ArrayOfImages[random5] && ArrayOfImages[random4]!=ArrayOfImages[random5]){
         flag=1
        }
        
        
        
        else{  random2=Math.round(a3+(b3-a3)*Math.random())
            
            random3=Math.round(a3+(b3-a3)*Math.random())
            
            random4=Math.round(a3+(b3-a3)*Math.random())

            random5=Math.round(a3+(b3-a3)*Math.random())
        }


    }
    


// 
window.addEventListener('load',()=>{
    let element = document.getElementById('mainContainer')
    element.scrollIntoView()
    // 
})


setTimeout(() => { 
    // choosing random position for the images randomness in randomness 
    let randomArray=[random2,random3,random4,random5]
    let a6=0
    let b6=3
    // all the four random number that we are getting we are choosing a random number randomly to and this random number which
    // choose form the four random number will be our index of word & link & audio
   let random6=Math.round(a6+(b6-a6)*Math.random()) // 0 to 3 number

       let randomIndex = randomArray[random6]
       let value= vocabArray[randomIndex]
       mainWord.textContent=value
      mainwordlink.setAttribute('href',`#${value}2`)
    // let elements=document.getElementById(`${value}2`)
    // mainWord.addEventListener('click',()=>{
  
    // }) 

   
    
   
    
    
    //   if(value==undefined){
    //     mainwordlink.setAttribute('href','#Whisper')
    //   }

      
      
    //   clearInterval(mainInterval)
  
      
    /// adding the audio 
       SpeakAloud.setAttribute('src',ArrayOfAudios[randomIndex])


       PlayButton.addEventListener('click',()=>{
          SpeakAloud.play()
      }) 
      
      // showing the word number
       wordNumber.textContent=randomIndex +1
    if(flag==1){
           
     Image1=document.createElement('img')
    Image1.setAttribute('src',ArrayOfImages[random2])
    Image1.setAttribute('id',vocabArray[random2])
    imagesId.appendChild(Image1)
    
     Image2=document.createElement('img')
    
    Image2.setAttribute('src',ArrayOfImages[random3])
    Image2.setAttribute('id',vocabArray[random3])
    imagesId.appendChild(Image2)
    
     Image3=document.createElement('img')
    
    Image3.setAttribute('src',ArrayOfImages[random4])
    Image3.setAttribute('id',vocabArray[random4])
    imagesId.appendChild(Image3)
    
     Image4=document.createElement('img')
    Image4.setAttribute('src',ArrayOfImages[random5])
    Image4.setAttribute('id',vocabArray[random5])
    imagesId.appendChild(Image4)
    }


      let err=document.createElement('p')

      Image1.addEventListener('click',()=>{
          if(Image1.id==mainWord.textContent){
              let gifElement=document.createElement('img')
              gifElement.setAttribute('src',gifSource)
              gifContainer.appendChild(gifElement)
              body.appendChild(gifContainer)
            //   err.textContent="right answer"
            //   audio.play()
              err.classList.add('rightAnswer')
              shower.appendChild(err)
              intialRightScore++
              scoreValueRight=intialRightScore
              sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
              rightScoreValue.textContent=scoreValueRight
  
             setTimeout(() => {
              window.location.reload()
             }, 2000);
          }
      
          else if(Image1.id!=mainWord.textContent){
              err.textContent="wrong answer"
              err.classList.add('worngAnswer')
              shower.appendChild(err)
              intialWrongScore++
              scoreValueWrong=intialWrongScore
              sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
              wrongScoreValue.textContent=scoreValueWrong
              setTimeout(() => {
                  window.location.reload()
                 }, 1000);
          }
      })
  
      
     
  
      Image2.addEventListener('click',()=>{
          if(Image2.id==mainWord.textContent){
              let gifElement=document.createElement('img')
              gifElement.setAttribute('src',gifSource)
              gifContainer.appendChild(gifElement)
              body.appendChild(gifContainer)
              err.textContent="right answer"
            //   audio.play()
              err.classList.add('rightAnswer')
              shower.appendChild(err)
              intialRightScore++
              scoreValueRight=intialRightScore
              sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
              rightScoreValue.textContent=scoreValueRight
              setTimeout(() => {
                  window.location.reload()
                 }, 2000);
          }
      
          else if(Image2.id!=mainWord.textContent){
  
              err.textContent="wrong answer"
              err.classList.add('worngAnswer')
              shower.appendChild(err)
              intialWrongScore++
              scoreValueWrong=intialWrongScore
              sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
              wrongScoreValue.textContent=scoreValueWrong
              setTimeout(() => {
                  window.location.reload()
                 }, 1000);
          }
      })
  
  
      Image3.addEventListener('click',()=>{
          if(Image3.id==mainWord.textContent){
              let gifElement=document.createElement('img')
              gifElement.setAttribute('src',gifSource)
              gifContainer.appendChild(gifElement)
              body.appendChild(gifContainer)
              err.textContent="right answer"
            //   audio.play()
              err.classList.add('rightAnswer')
              shower.appendChild(err)
              intialRightScore++
              scoreValueRight=intialRightScore
              sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
              rightScoreValue.textContent=scoreValueRight
              setTimeout(() => {
                  window.location.reload()
                 },2000);
          }
      
          else if(Image3.id!=mainWord.textContent){
  
              err.textContent="wrong answer"
              err.classList.add('worngAnswer')
              shower.appendChild(err)
              intialWrongScore++
              scoreValueWrong=intialWrongScore
              sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
              wrongScoreValue.textContent=scoreValueWrong
              setTimeout(() => {
                  window.location.reload()
                 }, 1000);
          }
      })
  
      Image4.addEventListener('click',()=>{
          if(Image4.id==mainWord.textContent){
              let gifElement=document.createElement('img')
              gifElement.setAttribute('src',gifSource)
              gifContainer.appendChild(gifElement)
              body.appendChild(gifContainer)
              err.textContent="right answer"
            //   audio.play()
              err.classList.add('rightAnswer')
              shower.appendChild(err)
              intialRightScore++
              scoreValueRight=intialRightScore
              sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
              rightScoreValue.textContent=scoreValueRight
              setTimeout(() => {
                  window.location.reload()
                 }, 2000);
          }
      
          else if(Image4.id!=mainWord.textContent){
              err.textContent="wrong answer"
              err.classList.add('worngAnswer')
              shower.appendChild(err)
              intialWrongScore++
              scoreValueWrong=intialWrongScore
              sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
              wrongScoreValue.textContent=scoreValueWrong
              setTimeout(() => {
                  window.location.reload()
                 }, 1000);
          }
      })
  
  

    
   }, 500);





