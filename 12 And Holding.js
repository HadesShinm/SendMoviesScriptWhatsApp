async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

12 and holding
by
Anthony S. Cipriano



 4.06.04
Director: Michael Cuesta Copyright 2004
Contact: 212 343 0069 Reg@WGA West
 516 909 4787
FADE IN:
EXT. NEIGHBORHOOD STREET - MORNING
TWIN BOYS, RUDY AND JACOB CARGES (12), ride their bikes
through a suburban neighborhood.
Rudy, the more athletic of the two, rides at a breakneck
pace. Jacob rides slowly due to a HOCKEY MASK that he wears
over his face. It’s making it difficult for him to see. The
boys turn down a DIRT PATH and ride deep into some WOODS.
INT. WOODS - CONTINUOUS
Rudy and Jacob ride to the edge of a CLEARING and stop.
Across from the clearing is a large OAK TREE, which has a
TREE HOUSE perched high up in it’s branches. The boys
cautiously look around and whisper.
JACOB
You see ‘em?
RUDY
No. But that doesn’t mean they’re
not here.
After a beat, Rudy gets off his bike and starts walking
towards the tree house. Jacob stays behind, eyeing their
safety.
RUDY (CONT'D) (cont’d)
Jacob, come on. It’s cool.
Suddenly, a ROCK comes careening from off screen. It hits
Jacob in the head and knocks him to the ground.
Rudy darts for the oak tree as a hail storm of rock and
debris come flying at him.
As Jacob rises, a stream of blood pours down the front of his
mask. He quickly runs for the tree.
TWO BOYS, JEFF AND KENNY (14), trailer park, punks come
running out of the woods, rocks in hand.
Rudy and Jacob climb the tree, using makeshift RUNGS that are
nailed into the trunk. In the floor of the tree house is a
DOOR. Rudy removes a KEY from a chain around his neck and
unlocks it. He climbs inside and pulls Jacob in after him.
INT. TREE HOUSE - CONTINUOUS
Jacob looks back and sees Jeff and Kenny, running over. Rudy
crosses to the door with a BUCKET of liquid.
JACOB
What the hell is that?
RUDY
Piss.
Rudy dumps the piss onto Jeff and Kenny.
EXT. TREE HOUSE - SAME TIME
Now drenched with piss, Jeff and Kenny jump from the tree,
screaming. They try to shake the urine off.
Kenny spits the taste out of his mouth and angrily calls up
to the boys.
KENNY
You and your deformed brother are
dead!
INT. TREE HOUSE - SAME TIME
Jacob rips the hockey mask off. (A large STRAWBERRY
BIRTHMARK covers the right side of his face.) He’s insulted.
RUDY
(calling to Kenny)
Anytime you’re ready, dickhead.
EXT. TREE HOUSE - SAME TIME
Jeff and Kenny walk off.
KENNY
They’re fucking dead!
Jeff runs off screen and throws up.
INT. FISHER HOME - KITCHEN - MORNING
LEONARD FISHER (12), severely obese, sits at the dinner
table, eating pancakes.
His FATHER, PATRICK (35) and TWO YOUNGER SISTERS, HALEY (8)
and SARA (6) are seated with him. They are all overweight.
 2.
(CONTINUED)
LEONARD’S MOTHER, GRACE (35), the largest of them all,
crosses to the table, sits and starts eating.
JUMP CUTS show the progression of their meal. From globs of
syrup being placed over pancakes to the mass consumption of
omelets and sausage. Caught up with eating, nobody speaks.
EST. EXT. CHUNG RESIDENCE - MORNING
A modern, upper-class home with a large, well tended yard.
YACCO (O.S.)
The check is supposed to be here on
the first of the month... She’s
your daughter, you asshole!
INT. CHUNG HOME - UPSTAIRS HALLWAY - CONTINUOUS
YACCO CHUANG (35), Asian-American, sexy, uptight,
psychiatrist, paces the hallway on the phone.
HER DAUGHTER, MALEE (12) with long, black, braided hair and
thick rimmed glasses, peeks her head out of the bathroom.
MALEE
Mom, I need help.
YACCO (INTO PHONE)
(ignoring her)
Any parent is “parent of the year”
next to you, you selfish prick.
Yacco walks off. Deflated, Malee reenters the bathroom.
INT. CHUNG HOME - BATHROOM - CONTINUOUS
Malee is wrapped in a towel and holding a TAMPON. Confused,
she grabs the TAMPON BOX and reads the directions. Malee’s
confusion quickly turns to disgust.
EXT. NEIGHBORHOOD ENTRANCE - LATER
Leonard sits upon a large rock with the words, LINDSAY ACRES
inscribed on the center of it. He eats POPCORN. Hanging off
the top right hand corner of the rock is a banner, which
reads, 5th ANNUAL 4TH OF JULY PICNIC. ALL INVITED.
Malee rides her bike up to Leonard. She HONKS her BIKE HORN
at every pedestrian in her path.
MALEE
Move it, people. Outta my way!
 3.
CONTINUED:
(CONTINUED)
She comes to a screeching halt an inch in front of Leonard.
LEONARD
(mouthful)
You’re late.
MALEE
Yeah well, I began menstruating
this morning, and I had some
difficulty inserting the tampon.
(off his disgusted look)
What? It’s a natural process. You
know, I could conceive, carry and
birth a child right now.
LEONARD
Big deal. You won’t.
MALEE
But I could. That’s what matters.
LEONARD
The twins said, they’d meet us at
the spot.
Leonard gets on his bike.
MALEE
Wanna race?
LEONARD
Nah, I’m good.
INT. TREE HOUSE - LATER
Jacob wipes at his head wound, frightened.
JACOB
Maybe I should have mom look at it.
RUDY
If you didn’t have that damn mask
on, you’d have seen it coming. Our
birthday comes once a year, and you
ask for a hockey mask. You don’t
even play.
JACOB
Jason from “Friday the 13th” wears
one. He’s bad ass.
 4.
CONTINUED:
(CONTINUED)
RUDY
Exactly. Jason wouldn’t run home
‘cause of a little blood. He’d get
back up, decapitate his victim and
move on.
Jacob looks out the makeshift window in the wall.
JACOB
You think Jeff and Kenny will come
back?
RUDY
I dropped piss on their heads. I’d
say the odds are pretty good.
MALEE (O.S.)
You did what?
Rudy and Jacob turn to find Malee and Leonard, entering the
tree house.
RUDY
Jeff and Kenny were here. I dumped
the piss I’ve been saving on their
heads.
LEONARD
Why were you saving piss?
RUDY
Just incase. Pretty smart, huh?
JACOB
No, it’s stupid cause now they’re
gonna come back here and kick all
our asses.
RUDY
Don’t be such a pussy.
LEONARD
Yeah, I could probably take them
both myself.
RUDY
What are you gonna do, Leonard, eat
them?
JACOB
All I’m saying is, who cares if
they tear it down.
 5.
CONTINUED:
(CONTINUED)
RUDY
This is OUR place. We’ve been
coming here since we were seven.
JACOB
Nothing lasts forever.
RUDY
You’re such a butt-munch.
Rudy pushes Jacob. Jacob pushes back. The two start
fighting.
MALEE
You guys, it’s your birthday.
Could you try and get along?
Off the boy’s fighting -
INT. YACCO’S OFFICE - LATER THAT AFTERNOON
Yacco sits across from DEBBIE POOLE (42), housewife,
conservatively dressed.
DEBBIE
I don’t think therapy is helping.
YACCO
Why do you say that? Are you still
“cutting”?
Embarrassed, Maggie lifts up her shirt sleeve. We see that
her arm is covered with cuts. Dried blood is everywhere.
Yacco is horrified by the sight.
YACCO (cont’d)
Oh, Debbie.
DEBBIE
It feels much better than it looks.
Really.
Suddenly, Malee bursts into her mother’s office.
MALEE
Ma, I... Oops.
YACCO
Malee, out. Now.
MALEE
I’m sorry.
 6.
CONTINUED: (2)
(CONTINUED)
Malee quickly exits the office.
YACCO
Excuse me for a moment.
INT. YACCO’S OFFICE - RECEPTION AREA - CONTINUOUS
Yacco enters the reception area. She is obviously angry.
YACCO
I told you a 100 times to knock.
MALEE
I said, I was sorry.
YACCO
Why aren’t you with the boys?
MALEE
Rudy and Jacob went for pizza with
their parents.
Yacco crosses to a desk and removes a FLUTE from a drawer.
YACCO
I found this in the backseat of my
car this morning. Do you know how
much flutes cost? Go outside, sit
on the front steps and practice.
MALEE
But, mom.
YACCO
Now!
Angered, Malee grabs the flute and exits.
EXT. FRONT OF YACCO’S OFFICE - CONTINUOUS
Malee drops on the stoop like a ton of bricks. After a beat,
she reluctantly begins playing her flute.
A few pedestrians stop to listen.
MALEE
Keep it moving. This ain’t a show.
INT. TWIN’S HOUSE - LIVING ROOM - NIGHT
Rudy and Jacob stare into the camera with big grins.
 7.
CONTINUED:
(CONTINUED)
RUDY/JACOB
Cheese!
VFX: CAMERA FLASH
The boys relax their poses as ASHLEY and JIM CARGES (30’s),
enter the shot. Ashley puts her camera down on the table and
picks up a large PRESENT.
JIM
Okay, you got your small gifts this
morning. Now for the big ones.
ASHLEY
This one is Rudy’s.
Rudy rips into the present, revealing a SONY PLAY STATION.
RUDY
Sony play station! Oh my God! Oh
my God! Yes! Too cool!
JIM
Since neither of you wanted a party
this year, we were able to splurge.
Ashley removes an ENVELOPE from her purse. She hands it to
Jacob. His enthusiasm suddenly turns to worry.
JACOB
What is it?
ASHLEY
Only one way to find out.
Jacob removes a colorful PAMPHLET from the envelope.
JIM
Go ahead, read it.
JACOB
“Plastic Surgery. Isn’t it about
time?”
(horrified)
I don’t get it.
ASHLEY
Your father and I are going to pay
to have your birthmark removed.
JIM
Isn’t that great.
 8.
CONTINUED:
(CONTINUED)
JACOB
You got me surgery for my birthday?
JIM
Not just one. A series of them.
RUDY
(overcompensating)
Cool.
JACOB
It’s not “cool”. It totally sucks!
Jacob drops the envelope, walks from the room.
JIM
Jacob?
INT. TWIN’S HOUSE - BOY’S BEDROOM - LATER
Rudy enters the darkened room and crosses over to Jacob, who
has his face planted in his pillow. Jacob has been crying.
RUDY
Don’t sweat it. You can borrow my
play station anytime you want.
JACOB
This isn’t about the play station.
It’s about this thing on my face.
Everybody hates it.
RUDY
I don’t.
JACOB
Who cares what you think? You’re
the reason for all of this.
Perfect you with your perfect skin.
There to show the world what I’m
supposed to look like.
(beat)
You know, sometimes I just wish I
wasn’t your twin.
RUDY
Screw you! Know what, I take it
back, you can’t use my play
station.
Rudy exits the room, slamming the door after him.
 9.
CONTINUED: (2)
EXT. NEIGHBORHOOD - NEXT DAY
It’s your typical fourth of July block party. Families crowd
the streets with BBQ GRILLS, cotton candy and beer. Children
ride their bicycles, which are adorned with streamers,
balloons and noise makers.
Off to the side, Malee and Jacob sit, eating SNOW CONES.
EXT. STREET - SAME TIME
Jim Carges tends to some burgers on his grill. GABE ARTUNION
(40), real estate agent, approaches.
GABE
30 acres.
JIM
I already told you, Gabe, I’m not
selling that land. Not 30 acres
not five.
GABE
I’m willing to pay top dollar.
JIM
I’m not gonna let you tear down
those woods, so you can stack
twenty houses right on top of each
other.
GABE
I’m gonna write down a number.
JIM
No! My kids... hell, your kids
play in those woods all the time.
You can’t put a price on that.
Gabe writes down a number and hands it to Jim.
GABE
I believe I can.
Jim looks at the figure and his eyes go wide.
EXT. STREET - LATER
A line of PICNIC TABLES surround nearby GRILLS. Leonard’s
family minus Leonard sit, eating as if there’s no tomorrow.
 10.
(CONTINUED)
SOCCER MOM # 1 (O.S.)
Look at them. So unhealthy.
ON TWO SOCCER MOMS, watching Leonard’s family eat.
SOCCER MOM # 1 (cont’d)
You know, Grace can barely walk
because of her weight.
SOCCER MOM # 2
Where do you think she finds
clothes big enough to fit?
The two woman walk off. As they disperse, we see LEONARD,
standing behind them. He has heard every word.
Hurt, Leonard looks down at his own plate, which overflows
with food. He feels embarrassed and disgusted.
Patrick rises and crosses over to the buffet table.
PATRICK
Good eating, huh son?
Patrick grabs the ladle and begins to fill up his plate.
LEONARD
Maybe you shouldn’t have seconds,
Dad, you know?
PATRICK
Who are you, Richard Simmons?
C’mon, enjoy the day.
He walks off with his food. Leanard looks down at the food,
shrugs, then helps himself to a heaping porion.
EXT. ANOTHER PART OF THE STREET - DUSK
RUDY straddles his bike while watching a group of 8-yearolds, having a water balloon fight. Jealous, he
reminiscences to a time when he was one of those kids.
KENNY
(o.s. )
Me and Jeff are gonna pay that tree
house of yours a little visit
tonight.
Rudy spins around to find Kenny, standing at his side.
 11.
CONTINUED:
(CONTINUED)
KENNY (cont'd)
When we’re through, it’ll be a pile
of scrap.
RUDY
Why don’t you take your smelly ass
back to the trailer park?
KENNY
Free country, asshole.
RUDY
You got nothing better to do than
pick on us all the time?
KENNY
I did until yesterday.
RUDY
I thought you liked “golden
showers”. Oh no, that was your
mother.
Kenny pushes Rudy to the ground and then jumps on top of him.
Rudy struggles to get free, but he’s overpowered. A crowd of
kids surround them, chanting, “FIGHT, FIGHT”.
Jeff hocks a phlegm wad onto Rudy’s face. Rudy screams as
the stream of saliva, drips across his nose and onto his lip.
NEIGHBORHOOD FATHER (O.S.)
What’s going on over there?
Kenny looks up and sees a neighborhood parent coming over.
KENNY
I’ll finish this tonight!
Kenny pushes Rudy down once more and runs off. Rudy slowly
rises, wiping the saliva from his face.
EXT. VACANT LOT - LATER THAT NIGHT
The entire neighborhood has descended upon a VACANT LOT.
They are awaiting the annual, fireworks display.
We FIND Leonard, Jacob and Malee sitting on a large rock,
which gives them a birds eye view of the crowd.
Rudy runs over to the rock and climbs up top.
 12.
CONTINUED:
(CONTINUED)
RUDY
Kenny showed up. He said, Jeff and
him are gonna tear the treehouse
down tonight. We gotta sneak out
and stop them.
JACOB
Mom and Dad would kill us.
RUDY
We can’t let him tear it down.
JACOB
It’s just a treehouse.
RUDY
No, it’s not! You know what, you
suck. I’m going. Leonard, you in?
JACOB
You don’t have to go if you don’t
want to.
RUDY
Don’t listen to him. He’s a pussy.
Leonard looks between Jacob and Malee.
LEONARD
I’ll go.
RUDY
Finally, someone with balls.
Insulted, Jacob slides off the rock and walks away. Malee
follows.
RUDY (CONT'D) (cont’d)
Let them go.
The fireworks display begins. As they turn to watch it...
INT. TWIN’S HOME - BOY’S BEDROOM - MIDDLE OF THE NIGHT
We SCAN the room and come to a set of BUNK BEDS.
SFX: ELECTRIC WATCH ALARM
A body in the top bunk sits up and turns on a small bed
light. Reveal, it’s RUDY. Rudy grabs his watch from the
post and silences the alarm. Jacob sits up in bed.
 13.
CONTINUED:
(CONTINUED)
JACOB
Rudy.
RUDY
Unless you’re coming with me, I
don’t want to hear it.
Jacob lies back in bed, silent. Rudy jumps off the top bunk,
gets dressed and grabs a BASEBALL BAT. Before leaving, Rudy
looks back at Jacob and shakes his head, disappointed.
RUDY (cont’d)
You know, you can’t be a pussy all
your life.
JACOB
What?
RUDY
Jeff and Kenny pick on you all the
time, and you don’t do shit.
JACOB
It’s my problem.
RUDY
No, it’s mine too. Cause we’re
brothers. That’s what brothers do.
They fight for each other, kill for
each other, die for each other.
JACOB
I don’t feel that way.
RUDY
Cause you’re a pussy. So stay
home, keep your head under the
blankets. I’m gonna fight.
With that, Rudy disappears out the window.
FADE TO BLACK:
DARKNESS... SFX: CREAKING DOOR. A FLASHLIGHT illuminates the
location. We are...
INT. TREEHOUSE - LATER THAT NIGHT
Leonard and Rudy enter with the help of a flashlight.
Leonard reaches inside his backpack and removes a number of
SNACK CAKES from his backpack.
 14.
CONTINUED:
(CONTINUED)
LEONARD
(re: snack cakes)
Some provisions.
RUDY
We’re only gonna be here a couple
of hours.
LEONARD
When two o’clock rolls around,
you’ll be begging for one of these.
Rudy shakes his head, removes his BAT from his backpack.
LEONARD (cont’d)
(re: baseball bat)
I didn’t bring my glove.
RUDY
Moron, the bat is for Jeff and
Kenny. You know, to scare them a
little.
He swings it hard.
RUDY (cont’d)
Maybe it’s best if we don’t talk.
Just listen. Listen for them, and
don’t fall asleep.
LEONARD
I’m wide awake. I could stay up
all night.
EST. EXT. WOODS - LATER THAT NIGHT
The treehouse is illuminated by the full moon, which rests in
the sky above. The thunderous sound of a million crickets
fills the air.
INT. TREEHOUSE - CONTINUOUS
Both boys lie asleep. A mosquito flies in through the window
and buzzes past Leonard’s ear. He haphazardly swipes at it
in his sleep, wakes himself up.
LEONARD
Oh, shit.
Rudy jumps awake.
 15.
CONTINUED:
(CONTINUED)
RUDY
What... What is it? They here?
LEONARD
No.
Leonard rises, picks up his bag and opens the TRAP DOOR in
the floor. He is about to exit.
RUDY
Where you going?
LEONARD
They’re not gonna show up, I’m
goin’ home. It’s three o’clockSuddenly, a FLAMING COCKTAIL comes flying through the window.
It hits Rudy in the head, explodes and engulfs him in flames.
EXT. TREEHOUSE - SAME TIME
Jeff and Kenny stand a few yards away from the treehouse.
Both laugh at the sight of the flames inside.
KENNY
Now yours. And aim for the window.
Jeff lights his COCKTAIL. It misses the window and smashes
into the side of the tree house.
KENNY (CONT'D) (cont’d)
Ha ha, you suck.
Jeff and Kenny hear Leonard and Rudy screaming from inside.
JEFF
You hear that?
INT. TREEHOUSE - SAME TIME
Rudy, now covered in flames, rolls on the floor, screaming.
RUDY
Put it out! Put it out!
Leonard struggles to put out the flames with his backpack,
but it’s of no use. He spins around and finds the wall
behind him, engulfed with flames. He screams, terrified.
EXT. TREEHOUSE - SAME TIME
Jeff and Kenny are frantic.
 16.
CONTINUED:
(CONTINUED)
JEFF
They’re in there! They’re in
there!
Jeff turns around and runs back home through the woods.
INT. TREEHOUSE - SAME TIME
Leonard backs away from Rudy. Unfortunately, he doesn’t
realize that the door in the floor is open.
EXT. TREEHOUSE - SAME TIME
We watch over Kenny’s shoulder as Leonard falls from the
treehouse, smacks his head on the tree trunk and comes to a
crash upon some rocks. Kenny runs over and finds Leonard
unconscious.
KENNY
Wake up! Wake up, kid!
Off the treehouse, which is now a towering inferno -
INT. TWIN’S HOUSE - PARENT’S BEDROOM - SAME TIME
Ashley jumps up from a deep sleep. There is terror on her
face. She rushes over to her DESK and turns on the LAMP.
Ken is awakened by her.
JIM
Ashley? What is it?
ASHLEY
I forgot to deposit your paycheck
last week.
JIM
But I already wrote some checks.
ASHLEY
I know. With the cookout and
everything, I forgot. I’ll deposit
it tomorrow. The holiday should
buy us an extra day.
JIM
Write yourself a note so you don’t
forget again.
ASHLEY
I just did.
 17.
CONTINUED:
(CONTINUED)
Ashley turns off the desk lamp and returns to bed.
ASHLEY (cont’d)
Goodnite.
FADE TO BLACK:
SFX OVER BLACK : TELEPHONE RINGING
FADE IN:
EXT. GRAVEYARD - WEEKS LATER - AFTERNOON
ON JIM and ASHLEY, watching Rudy’s casket as it is lowered
into the ground. The once spirited, couple now looks tired
and pained. They are accompanied by a number of mourners.
PRIEST
Rest in piece, Rudolph Eugene
Carges. May God hold you in the
palm of his hand.
Jacob stands beside his parents. Tears stream from his eyes,
across his birthmark and off his chin. So stricken with
grief, Jacob barely has to energy to wipe the tears away.
We continue on through the crowd and find Malee. Embarrassed
by the tears, she brings a black veil down over her face.
INT. YACCO’S OFFICE - LATER THAT DAY
Malee enters, still wearing the veil. She crosses to the
couch and sits beside A PATIENT, GUS MAITLAND (30), long
haired, hippi-type with a moustache and beard. Gus eyes
Malee, intrigued.
GUS
Friend or family?
MALEE
Huh?
GUS
The person who died.
MALEE
Friend.
GUS
I’m sorry. You’ll like Dr. Chung.
This is only my second session, but
she’s good.
 18.
CONTINUED:
(CONTINUED)
MALEE
I’m not a patient. I’m her
daughter.
Malee lifts her veil and looks at Gus.
GUS
Oh. I can see the resemblance.
MALEE
Are you trying to make me sick?
Gus shoots Malee a look just as Yacco exits her office.
YACCO
Mr. Maitland?
Gus rises and enters the office.
YACCO (CONT'D) (cont’d)
I’ll be with you in a second.
Yacco crosses to Malee and sits beside her.
YACCO (CONT'D) (cont’d)
So, how was it?
MALEE
It was a funeral, Mom. How do you
think it was?
YACCO
I’m sorry I couldn’t make it. Let
Rudy’s parents know I’m available
if they need to talk. I won’t
charge for the sessions.
Malee looks to Yacco, stunned by her comment.
YACCO (CONT'D) (cont’d)
You know, it’s okay to cry.
MALEE
I know it’s okay to cry. I don’t
need you to tell me, it’s okay to
cry. If I want to cry, I’ll cry.
YACCO
Okay.
Yacco re-enters her office. A beat.
 19.
CONTINUED:
(CONTINUED)
Malee starts to cry.
EXT. JACOB’S HOME - LATER THAT AFTERNOON
Cars fill the driveway and line the street in front of
Jacob’s house.
INT. TWIN’S HOME - LIVING ROOM - SAME TIME
Mourners stand in small groups, engaged in hushed
conversations. Jim sits in his recliner, crying.
INT. TWIN’S HOME - KITCHEN - SAME TIME
A number of MOTHERS watch as Ashley obsessively prepares a
platter of deviled eggs. Concerned, one of them crosses over
to her.
MOTHER
Ashley, there’s more than enough
food here.
ASHLEY
No, Rudy loved my deviled eggs.
It’s right that I make them.
Where’s the paprika?
Ashley opens up her cupboards in search of the paprika.
ASHLEY (CONT'D) (cont’d)
Jesus, you put something down, and
it disappears.
Now angry, Ashley starts throwing objects out of the
cupboards, haphazardly.
MOTHER # 1
Ashley.
Ashley slams her cupboard doors shut. She looks around and
spots the GARBAGE PAIL across the kitchen.
ASHLEY
Maybe I threw it out.
Ashley crosses to the garbage. She lifts it upside down and
dumps the trash all over the floor. Ashley gets on her knees
and starts searching.
The other women look to each other, uncomfortable. Mother #
1 kneels down beside her.
 20.
CONTINUED: (2)
(CONTINUED)
MOTHER # 1
Ashley.
Ashley ignores her. Mother # 1 grabs Ashley’s hands and
looks her in the eye.
ASHLEY
It’s okay.
Ashley stops cold. The grief and heartache hit once again.
ASHLEY (CONT'D) (cont’d)
Not my baby! Please God not my son!
The mothers collectively drop to the floor and surround
Ashley in an attempt to comfort her. They give no care to
the pile of garbage they now sit in.
INT. LEONARD’S HOSPITAL ROOM - LATER THAT DAY
Leonard lies in a bed, staring out the window. There is a
BANDAGE wrapped around his forehead. Patrick sits beside him
in a chair.
Grace enters, carrying bags of MCDONALD’S food with her.
GRACE
This hospital is a nightmare. The
elevator is never there when you
need it.
Patrick crosses over to the food and grabs his lunch.
PATRICK
Where are the girls?
GRACE
Haley took Sara up to the maternity
ward.
Grace crosses over to Leonard.
GRACE (CONT'D) (cont’d)
How are you feeling?
LEONARD
My head hurts.
GRACE
You’re lucky you didn’t get killed.
 21.
CONTINUED:
(CONTINUED)
LEONARD
I told you, I’m sorry.
GRACE
You try being awakened at four
o’clock in the morning by the
police saying, they have your son,
he’s unconscious and on his way to
the hospital. I’ve never been so
scared in my life. And poor Rudy.
Leonard starts crying.
GRACE (cont’d)
What?
LEONARD
My best friend is dead!
Grace hands Leonard a double cheeseburger.
GRACE
Eat this. It’ll make you feel
better.
LEONARD
I’m not hungry. Besides, I can’t
taste anything anyway.
GRACE
Hospital food is always bland.
This has flavor.
LEONARD
No, it’s because of my condition.
I can’t taste or smell anything
anymore.
GRACE
What are you saying, condition?
What condition?
LEONARD
(shrugs)
My condition.
INT. DOCTOR’S OFFICE - MOMENTS LATER
Patrick and Grace sit across from the DOCTOR (50’s).
 22.
CONTINUED:
(CONTINUED)
DOCTOR
Leonard has a condition. It’s
called Anosmia.
GRACE
Oh my God! Is it serious?
DOCTOR
No. Anosmia is when a person
looses their sense of smell. It’s
not uncommon in patients who suffer
serious head injuries.
Unfortunately, it’s also affecting
his ability to taste. Again, not
uncommon.
PATRICK
Is it permanent?
DOCTOR
Depends on the patient.
GRACE
What do we do? He can’t eat.
DOCTOR
He can eat. He just can’t taste
what he’s eating.
PATRICK
What she means is, he won’t eat.
DOCTOR
Leonard’s association with food is
no longer about taste. It’s about
texture. While we may be partial
to sweet or salty foods, Leonard
will become partial to crunchy or
smooth ones. Once he settles on a
texture he likes, his appetite will
increase.
GRACE
I can’t believe this is happening.
DOCTOR
Considering what Leonard could have
suffered, he’s lucky. Besides, he
is severely overweight. A loss of
appetite may be a benefit.
Grace and Patrick shoot him a look of death.
 23.
CONTINUED:
INT. LEONARD’S HOSPITAL ROOM - SAME TIME
Leonard lies in bed, staring out the window. A NURSE (40)
enters and crosses over to his bedside table.
NURSE
How’d we do?
The nurse sees that Leonard has barely touched his food.
NURSE (CONT'D) (cont’d)
You have to eat something. It may
not be gourmet, but you don’t look
that finicky.
LEONARD
This stuff feels like shit in my
mouth.
NURSE
It’s macaroni and cheese.
LEONARD
It feels gross. Like there’s a
film on my tongue.
The nurse grabs the tray of food. She removes an untouched
apple and places it in Leonard’s hand.
LEONARD (CONT'D) (cont’d)
I don’t like apples.
NURSE
So, you can’t taste it, right?
Maybe you’ll like the crunch.
The nurse exits. Leonard eyes the apple in his hand. A
beat. He reluctantly takes a bite. The apple makes a loud
CRUNCH. Leonard starts chewing. After a few seconds, a
smile comes to his face. He likes it.
INT. JACOB’S BEDROOM - SAME TIME
Jacob lies in bed, holding Rudy’s old baseball GLOVE. He
brings the glove to his nose, and a flood of old memories
come back to him.
Jacob rises, crosses over to the closet and removes a metal
LOCK BOX. He selects 666 for the combination and the box
opens. Jacob removes the contents; baseball cards, some
firecrackers, a few ticket stubs and a PHOTOGRAPH of he and
Rudy at age 5. He can’t help but smile.
 24.
INT. JACOB’S HOME - LIVING ROOM - SAME TIME
Gabe Artunian crosses over to Jim.
GABE
I’m leaving, Jim. Again, so sorry.
As Gabe turns to leave.
JIM
Gabe, are you still interested in
buying the land? Because I accept
your offer.
GABE
This is hardly the time to talk
business.
JIM
Buy the woods, Gabe, please. Tear
them down and build. Build houses,
condos, a 7-11, I don’t care. I
just don’t want to recognize it
ever again.
Off Gabe’s look -
SFX OVER SHOT: BUZZING CHAIN SAW
SMASH CUT TO:
EXT. WOODS - THREE WEEKS LATER -AFTERNOON
TIGHT ON a CHAIN SAW chopping down a tree.
WIDEN to REVEAL a CONSTRUCTION CREW, tearing down the last of
the woods. Rows and rows of STUMPS make it look like a
graveyard for trees.
MALEE (O.S.)
It’s gone! It’s all gone!
We FIND Malee and Jacob, straddling their bikes a few feet
away from the site. Leonard is beside them on a scooter. He
as a band-aid on his forehead.
MALEE (CONT'D) (cont’d)
If Rudy was alive, he’d be freaking
out right now.
Leonard shoots Malee a look. She silences herself.
 25.
(CONTINUED)
LEONARD
You holding up alright, Jacob?
Jacob shrugs.
LEONARD (CONT'D) (cont’d)
I’m sorry. I wish I could have
done something.
JACOB
Jeff and Kenny were the ones that
started the fire. It was their
fault. Or maybe mine. I should of
been there.
MALEE
You wouldn’t have been able to do
anything. And it could have been
you who died.
JACOB
I wish it was. You know the last
thing Rudy said to me? He said, I
can’t be a pussy all my life. He
was right, I am. And Rudy might be
dead because of it.
MALEE
Don’t say that.
(beat)
Why don’t you talk to your parents
about this?
JACOB
They can’t help me.
MALEE
Give them time. It’ll get better.
JACOB
What if it doesn’t? My dad hasn’t
gone back to work yet. What if he
loses his job. We could lose our
house. I could be homeless.
MALEE
Then you’ll stay with me.
LEONARD
Or me.
 26.
CONTINUED:
(CONTINUED)
JACOB
We’re best friends. We...
Suddenly, something catches Malee’s attention off screen.
It’s GUS, standing beside a BULLDOZER.
MALEE
Oh my God.
JACOB
What?
MALEE
That guy. I like know him. He’s
one of my mother’s patients.
LEONARD
So?
MALEE
I’ve never seen a patient of hers
actually out and about.
(beat)
Should we go over and say “hi”?
JACOB
I just want to get out of here.
Leonard and Jacob start heading off.
Malee stays for a beat, eyeing Gus as he removes his T-shirt
and exposes his rock abs. She is obviously turned on.
LEONARD
You coming, Malee?
INT. LEONARD’S HOME - KITCHEN - LATER THAT AFTERNOON
Leonard enters to find Grace, placing a casserole dish on the
table. The table is filled with a cornucopia of food.
LEONARD
Are we having company?
GRACE
No, this is all for you. Your
favorites; fried chicken,
spaghetti, pizza, french fries, and
chocolate cheesecake for dessert.
I made everything extra spicy, so
you can taste it.
 27.
CONTINUED: (2)
(CONTINUED)
LEONARD
Ma, it doesn’t matter how spicy the
food is.
GRACE
So you’re not even gonna try it?
LEONARD
I’m sure it’s delicious.
GRACE
Forget it. Don’t eat.
Grace puts the plate of food into the sink.
GRACE (cont’d)
You can’t just eat apples all the
time.
LEONARD
Why not?
GRACE
(beat, searching)
It’s unhealthy.
Off Leonard’s confusion -
SFX OVER SHOT: SCHOOL BELL
EXT. JEFFERSON JUNIOR HIGH SCHOOL - DAYS LATER - MORNING
Students make their way inside for the first day of school.
There is a sign out front, which reads: WELCOME BACK.
INT. CLASSROOM - SAME TIME
A TEACHER walks along the line of desks, showing students
their assigned seats.
TEACHER
Tommy Wallace.
Tommy takes his seat.
TEACHER (CONT'D) (cont’d)
Jacob Carges.
Jacob takes his seat.
TEACHER (CONT'D) (cont’d)
Rudy Carges.
 28.
CONTINUED:
(CONTINUED)
Jacob along with his classmates are shocked to discover that
Rudy’s name hasn’t been removed from the attendance sheet.
The teacher is unaware of the mistake.
TEACHER (CONT'D) (cont’d)
Rudy Carges. Hello?
Tommy looks to Jacob. Since Rudy’s not saying anything, he
will.
TOMMY
He’s not in this class anymore.
TEACHER
How do you know?
JACOB
Cause he’s dead.
TEACHER
I realize being new at this school
puts me at a disadvantage, but
joking about a fellow classmate’s
death is anything but funny, Mr....
The teacher checks her attendance sheet.
TEACHER (cont’d)
...Carges. Wait, are you...
JACOB
I’m his brother. Was. And I’m not
joking. He’s dead.
The teacher looks around at the other students, realizing
Jacob is telling the truth.
TEACHER
I’m so sorry. Wow, this is
awkward. Would you like the seat
left empty?
JACOB
Why?
TEACHER
In memory.
Off Jacob’s look -
 29.
CONTINUED:
INT. SCHOOL GYMNASIUM - LATER THAT DAY
COACH GILMORE (55), overweight, gym teacher, dressed in a
jogging suit, snaps gum while addressing his students.
The class of boys stand up against the wall. Leonard is
amongst them. His gym uniform barely fits.
COACH
Alright, ladies, welcome to gym.
We will be starting things off this
year with the United States
Standardized Fitness Test.
The entire class groans.
COACH (CONT'D) (cont’d)
I’m sure you all remember it from
last year. I will be testing you
in a number of physical fitness
areas.
As coach speaks, Leonard looks as if he’s going to throw up.
SMASH CUT TO:
ON CHIN UP BAR - MOMENTS LATER
A STUDENT performs chin ups with great ease.
COACH (V.O.)
The state’s requirement for upper
body strength is ten chin ups.
The student finishes his run with a count of twelve. He hops
off the bar and crosses over to his classmates.
COACH (CONT'D) (cont’d)
Leonard, you’re up.
Leonard crosses to the chin-up bar, grabs a hold of it and
begins struggling to lift himself up. Unfortunately, he can
only manage 1/8th of an inch. Leonard drops off the bar,
exhausted.
COACH (CONT'D) (cont’d)
What are you doing, let’s go!
LEONARD
That was as far as I could pull
myself up.
 30.
(CONTINUED)
A few students laugh. Coach shakes his head, disgusted.
SMASH CUT TO:
ON A STUDENT DOING SITUPS - LATER
Coach stands over the boy, timing him with a stop watch.
COACH
Ten seconds. You need forty to
pass.
The student increases his speed.
COACH (CONT'D) (cont’d)
Time. 42. Good job.
The student rises off the mat and walks over to the other
boys. Leonard enters frame and drops on the mat like a ton
of bricks.
COACH (CONT'D) (cont’d)
(rolling his eyes)
Go!
Leonard struggles to lift himself up but, he can’t do it.
COACH (CONT'D) (cont’d)
Come on, son, fight it.
Leonard’s face turns red. He clenches his teeth.
Unfortunately, due to the pressure he is exerting, he blows a
loud fart. The gym erupts with laughter.
EXT. SCHOOL GROUNDS - TRACK - LATER
The coach and his students stand at the beginning of the
track, waiting for Leonard to finish his laps.
Leonard slowly walks over. He is soaking wet and breathing
heavy.
COACH
23 minutes.
LEONARD
Not bad.
COACH
The goal was 8.
The class can’t help but laugh.
 31.
CONTINUED:
(CONTINUED)
COACH (CONT'D) (cont’d)
Hit the showers.
The class walks off.
COACH (cont’d)
Not you Leonard.
Leonard turns back and crosses over to the coach.
COACH (CONT'D) (cont’d)
Center. That’s the position you’ll
be playing in two years.
LEONARD
Football?
COACH
You don’t like football?
LEONARD
I love it. It’s just I’ll never
make the weight requirement. Pop
Warner league wouldn’t let me play
for five years because of it.
COACH
There’s no weight requirement in
high school ball, son.
The coach bends down and rifles through his GYM BAG. He
removes 2 books and hands them to Leonard.
COACH (CONT'D) (cont’d)
These are your new bibles.
LEONARD
Books?
COACH
One is on nutrition, the other
exercise. You do what they say,
and you can play for me once you
get to high school.
LEONARD
Thanks.
Leonard begins walking back to the gym. After a few steps,
he stops and turns back.
 32.
CONTINUED:
(CONTINUED)
LEONARD (CONT'D) (cont’d)
Coach, why are you doing this for
me?
COACH
Because I’ve never seen a child so
out of shape in my life.
INT. SCHOOL AUDITORIUM - LATER THAT DAY
The school BAND is on stage and playing a particularly
horrendous rendition of the STAR SPANGLED BANNER. We FIND
MALEE in the flute section, playing her heart out.
The CONDUCTOR, MR. FARMER (40) overly energetic and dorky,
waves his baton, silencing the band.
MR FARMER
(annoyed)
Did anyone practice over the
summer?
The band sits silent.
MR. FARMER
Great. Well, we still have a fall
recital coming up. If anyone would
like to perform a solo, sign up on
the sheet outside my office. Class
dismissed.
Off Malee, weighing the decision in her mind.
INT. SCHOOL HALLWAY - MOMENTS LATER
Malee stands outside Mr. Farmer’s office, staring at the SIGN
UP SHEET on his door. After a beat, she lifts her pen to
sign her name. Before she writes it, she stops, quickly
turns around and walks away.
After a beat, Malee returns to the sign up sheet and starts
writing her name. Halfway through, she stops, scratches out
her name and walks off.
We remain on the sign up sheet. After a few seconds, Malee’s
hand enters the shot and writes in her name.
INT. JACOB’S HOME - DEN - EVENING
Jacob enters to find Jim and Ashley fighting.
 33.
CONTINUED: (2)
(CONTINUED)
ASHLEY
No, they’re wrong. Call them back.
JIM
Ashley, I talked to the lawyer. He
wouldn’t lie.
JACOB
What’s going on?
ASHLEY
This is all your fault.
JIM
Me?
ASHLEY
If we had gone to the hearings like
I said, this wouldn’t be happening.
JIM
We agreed it would be too painful.
ASHLEY
You agreed.
JACOB
Mom, what happened?
Ashley turns to Jacob as if realizing his presence for the
first time.
ASHLEY
Tell him. Tell your son.
JIM
The boys who killed Rudy cut a
deal. They got a year in juvinile
hall and five years probation.
ASHLEY
A year. That's what your brother’s
life is worth. A damn year!
JIM
Ashley, calm down!
ASHLEY
How can you be so unaffected by
this! How? Our son was murdered!
 34.
CONTINUED:
(CONTINUED)
JIM
(measured)
It was an accident, and the boys
are juveniles.
ASHLEY
So that makes it okay?
Ashley storms out of the room. Jacob looks to his father,
unnerved by the sight of his mother so upset.
Jim just turns and walks into the living room.
FADE TO BLACK:
SFX OVER BLACK: ALARM CLOCK
FADE IN:
INT. LEONARD’S BEDROOM - EARLY MORNING
Leonard awakens and silences the alarm. He sits up in bed
for a moment and comes to his senses.
EXT. LEONARD’S HOME - MOMENTS LATER
Dressed in a sweat suit and sneakers, Leonard sprints down
the driveway and to the street. His sweat suit is so tight,
Leonard looks like a stuffed sausage.
With each step he takes, Leonard breathing becomes heavier
and heavier. Sweat forms on his forehead and drips down his
face.
Within seconds, Leonard’s pace tapers off. He struggles to
continue but is so out of shape, stopping is inevitable.
Leonard leans over, gasping for air. He looks back and
realizes that he only ran about one hundred yards. In fact,
his house is still in view.
Leonard turns around and starts walking back home. After a
few steps, he stops and throws up.
EXT. CONSTRUCTION SITE - DAYS LATER - AFTERNOON
Gus stands inside of a shallow ditch, digging out the roots
of an old tree.
MALEE (O.S.)
Don’t I know you?
 35.
CONTINUED: (2)
(CONTINUED)
Gus turns and sees Malee behind him, holding a PICNIC BASKET.
GUS
Dr. Chung’s daughter.
MALEE
You remembered. We were never
introduced. My name is Malee.
GUS
Gus.
They shake hands.
GUS (CONT'D) (cont’d)
What are you doing here?
MALEE
I was in the mood for a picnic. I
thought this would be a nice place
to have one.
Gus looks around, confused. This location is anything but
picnic friendly. Bulldozers plough through the scene,
blasting exhaust into the air. Men scream at each other.
WORKER (O.S.)
Asshole, move your fucking truck!
MALEE
Would you like to join me? There’s
plenty of food.
GUS
I don’t go to lunch for another ten
minutes.
MALEE
I’ll wait. Meet me by the cement
mixer when you’re ready.
Malee walks off. Gus watches as she makes her way through
the construction site.
EXT. CONSTRUCTION SITE - ANOTHER AREA - TEN MINUTES LATER
Gus and Malee sit on a checkered blanket, eating Chinese food
with chopsticks. A large CEMENT MIXER stands behind them.
 36.
CONTINUED:
(CONTINUED)
GUS
The last time I saw you, you had
just come from a funeral. How are
you doing?
MALEE
Okay. Death is like so weird. I
mean, it’s sad, but I also feel
like I’ve been given this sign. A
sign which is telling me, life is
short, so you gotta do what makes
you happy. You gotta take chances.
You gotta get crazy.
GUS
What are you doing to “get crazy”?
MALEE
I play the flute.
GUS
(laughs)
Yeah, that’s totally nuts.
MALEE
No, not that. See, every year my
school has this recital. I’ve
always been too scared to play a
solo in front of people, but this
year I’ve decided to do it.
GUS
Good for you. When is it?
MALEE
Why do you care?
GUS
Cause I’m gonna go.
MALEE
What? You can’t go! Nobody goes
to these things. I don’t even
think my mom is going.
GUS
You gotta have somebody rooting for
ya. Besides, I like music, and I
owe you for bringing me lunch.
 37.
CONTINUED:
(CONTINUED)
MALEE
(laughs, embarrassed)
Okay. Tuesday at 8:30 in the
junior high school auditorium.
GUS
I’ll be there.
MALEE
(vulnerable)
Don’t say it if you don’t mean it.
GUS
I’ll be there. Front row.
Malee smiles. She’s got a major crush on Gus now.
CUT TO:
TIGHT ON TV: VIDEO GAME - HALO. Two soldiers fire at each
other with supersonic weapons. One soldier is particularly
annihilated. GAME OVER appears.
INT. CARGES LIVING ROOM. DAY
REVEAL Jacob and Leonard in front of the TV. Malee off to the
side, reading a book.
LEONARD
I can’t believe how much you suck
at this game.
Jacob throws his remote down.
LEONARD (CONT'D) (cont’d)
You wanna play again?
JACOB
No.
The boys sit in silence for a beat.
LEONARD
You wanna shoot some hoops?
JACOB
No.
(beat)
The sentencing thing totally upset
my mom. She was up half the night,
crying.
 38.
CONTINUED: (2)
(CONTINUED)
Malee closes her book, looks over at Leanord.
LEONARD
I can’t believe it either. A year
ain’t shit! Rudy is dead forever.
JACOB
I want them dead. I want to kill
them. I could handle a year in
Juvy hall.
MALEE
Whoa, what those guys did was an
accident. If you were to kill
them, it’s premedicated. You’d get
20 years to life at least.
JACOB
So I’m just supposed to sit here
and take it? Be like you guys.
LEONARD
What is that supposed to mean?
JACOB
You seem to have gone on with life
pretty easily. Don’t you miss him?
Don’t you care?
MALEE
It’s not that we don’t care. It’s
just...
JACOB
Life goes on.
MALEE
It does. You have to deal with it.
If you don’t, it could like eat you
alive forever. 90 percent of
people’s problems is due to their
inability to get over the past.
LEONARD
How do you know?
MALEE
My mom tells that to all her
patients. I’ve eavesdropped on
some of her therapy sessions.
 39.
CONTINUED:
(CONTINUED)
LEONARD
That’s awesome. Can I listen in
sometime?
MALEE
No. Anyway, she says, if a person
wants closure, they gotta deal with
their problems head on. Go see
these guys and let them know how
you feel.
JACOB
I don’t think my parents would be
up for that.
MALEE
Go alone. Juvy hall is only like
forty minutes from here. Take the
bus.
Off Jacob, thinkingINT. JACOB’S PARENT’S BEDROOM - LATER THAT AFTERNOON
The bedroom door slowly opens. Jacob peeks his head inside
the darkened room and quietly enters. He tip toes over to
his parent’s bed. Ashley lies asleep, wrapped up in a bundle
of blankets.
Jacob crosses to her night stand and opens the top drawer.
He removes her purse, unzips it and steals some cash, which
totals around 60 dollars.
INT. CARGES LIVING ROOM - MOMENTS LATER
Jim sits in his chair, staring off into space. Jacob enters
and crosses to the front door.
JACOB
Bye, Dad.
EXT. BUS STATION - MOMENTS LATER
With the help of the BUS DRIVER, Jacob loads his bike into
the luggage compartment underneath the bus. Then he hands
the driver a ticket and boards.
Jacob takes a seat up front. After a few moments, the driver
boards, starts the engine and drives off.
 40.
CONTINUED: (2)
INT. JUVINILE HALL - CONVERSATION BOOTH - LATER
Jacob and Kenny sit, staring at each other through a plate of
glass. Kenny picks up the ONE WAY PHONE. Jacob does also.
JACOB
Where’s Jeff?
KENNY
He’s sick. I think he...
JACOB
(interrupting)
I hate you. You know that? You
bastard.
KENNY
Rudy knew we were going to be
there. He never should have come.
You want the truth, all this
happened cause of you.
JACOB
Me?
KENNY
Yeah, you deformed retard! The
only reason we started picking on
you guys in the first place was
because of that thing on your face.
JACOB
Every night, I lie in bed and plan
your murder.
KENNY
I’m shaking.
JACOB
First I’m going to take a kitchen
knife and chop off your fingers
then your nose then your tongue.
Then I’m gonna poke out your eyes
with the end of a broomstick.
Well, not really poke them out, but
I’m gonna push them back into your
brain. Then I’m gonna take
scissors and cut off your ears.
When they find you, it’s gonna be
like putting a jigsaw puzzle back
together.
 41.
(CONTINUED)
KENNY
If you kill me, you come here.
JACOB
So? What do I have to look forward
to? You’ve already destroyed my
life.
KENNY
What happened was an accident.
JACOB
There are no accidents. You’re
gonna pay for what you did. And
it’s gonna hurt like hell.
INT. LEONARD’S BEDROOM - NIGHT
Leonard sits, reading through nutritional manuals.
We see that he is writing things down on a piece of paper.
The words written are: Sugar, corn syrup, salt, gum.
INT. LEONARD’S HOME - HALLWAY/KITCHEN - LATER
Grace walks through the hallway half asleep. She enters the
kitchen and finds Leonard, sitting on the floor, surrounded
by boxes of food. All of the kitchen cupboards are open and
packages line the counter tops.
GRACE
What the hell is this?
LEONARD
I’m reading the list of ingredients
in our foods.
GRACE
Why?
LEONARD
Research. Do you know the damage
these chemicals can do to the human
body?
GRACE
Leonard, put everything back.
LEONARD
This is serious. You can’t keep
buying this crap. Don’t you care
that you’re ingesting garbage?
 42.
CONTINUED:
(CONTINUED)
GRACE
Just put everything back and go to
sleep.
Off Leonard’s look -
EXT. STREET - NEXT DAY - AFTERNOON
Malee is riding her bike on the sidewalk when she sees Gus,
exit his car and enter her mother’s office.
INT. STAIRWELL/HALLWAY - MOMENTS LATER
Malee runs up a flight of stairs. She gets off at the second
floor and enters an open, unoccupied office.
INT. UNOCCUPIED OFFICE - CONTINUOUS
Malee runs over to the heating grate and puts her ear to it.
YACCO (FROM BELOW)
How was your week?
GUS (FROM BELOW)
Same. Still can’t sleep. When I
do, nightmares.
INT. YACCO’S OFFICE - SAME TIME
Yacco and Gus sit across from each other.
YACCO
Post traumatic stress is very
common in your line of work. Many
fire fighters go through this.
GUS
Yeah. But why now? I haven’t
fought fires in ten years.
YACCO
Sometimes we experience something
so horrific, our memory blocks it
out. That way we won’t have to
relive the pain. It’s called
repression. Our bodies are not so
forgiving, however. Inside, we
feel the effects of trauma even
when we don’t know why.
GUS
What does that mean?
 43.
CONTINUED:
(CONTINUED)
YACCO
Something stirred your unconscious.
If we find out what that was, we
can begin the healing process.
Gus looks to her, confused.
YACCO (CONT'D) (cont’d)
You told me last week, the
nightmares started about the time
you moved here. Let’s look at
that. Why did you move here?
GUS
A friend was making good money with
construction. He got an offer to
build that extension off Lindsay
Acres. He suggested I come into
town and work for a while.
INT. UPSTAIRS OFFICE - SAME TIME
Malee is on the edge of her seat, listening. We see that she
has written the following words in her notebook: GUS -
NIGHTMARES - FIRE.
YACCO (FROM BELOW)
Are there any other reoccurring
elements in your dreams. Perhaps,
a face or...
INT. YACCO’S OFFICE - SAME TIME
GUS
“Light my Fire” is always playing.
YACCO
What?
GUS
Light my fire. The Doors song.
(singing)
“Da da something... wallow in the
mire... Da, da... we couldn’t get
much higher. Come on baby light my
fire.
Yacco stares at Gus. He is suddenly self conscious.
YACCO
Interesting.
 44.
CONTINUED:
INT. UPSTAIRS OFFICE - SAME TIME
Malee circles the words “Light My Fire” again and again and
again.
INT. JACOB’S HOME - UPSTAIRS HALLWAY - DAYS LATER - EVENING
SFX: CLANGING POTS AND PANS, coming from downstairs.
Jacob exits his room and goes to inspect the noise.
INT. JACOB’S HOME - KITCHEN - MOMENTS LATER
Jim stands on a chair, cleaning out the kitchen cupboards.
Pots and pans line the counter tops, dishes cover the table
and non perishable foods are spread out across the floor.
Jacob enters and is taken aback by the sight of Jim standing
on a chair and wearing an APRON and RUBBER GLOVES.
JACOB
Dad?
JIM
Jacob.
JACOB
You okay?
JIM
Fantastic.
Jim rips the rubber gloves off with his teeth.
JIM (CONT'D) (cont’d)
You know, for the past few weeks, I
sat in this house. I couldn’t
move. Everything reminded me of
Rudy. Then from out of nowhere I
had a revelation. I am alive!
Your mother is alive! I became
overcome with joy because I
realized how lucky we are to still
have you.
JACOB
Me?
JIM
Jacob. I love you.
 45.
(CONTINUED)
Jim grabs Jacob and hugs him tightly. Jacob pulls away,
unsettled and bit frightened.
JIM (CONT'D) (cont’d)
(half crazed)
I went to work today. For the
first time in weeks. It was as if
I had just gotten out of college!
I was fearless! I went after
accounts I had avoided for years
because I thought they were out of
my league. I spoke to presidents,
vice presidents, business managers,
sales reps. I was amazing. I was
magic. But when I came home to
share the news with your mother, I
discovered her asleep. When I
looked around the house, I realized
that her “office”, for lack of a
better word, was also piled up.
So, I took to the house. I have
made it my duty to clean this place
from top to bottom. Even if it
takes me all night, I don’t care.
Jacob?
JACOB
(frightened)
Yeah?
JIM
Will you join me? Join me in this
celebration of life. A symbolic
gesture of cleaning out the old and
bringing in the new.
JACOB
Do I have to?
JIM
(thrown for a loop)
No, you don’t have to.
JACOB
Good night, Dad.
Off Jim’s look -
EXT. JUNIOR HIGH SCHOOL AUDITORIUM - DAYS LATER - NIGHT
Parents and students file inside. A large SIGN above the
door reads, JEFFERSON JUNIOR HIGH FALL RECITAL.
 46.
CONTINUED:
INT. SCHOOL AUDITORIUM - CONTINUOUS
A packed audience listens to A GIRL (12), standing center
stage and singing “The Rose”. She is not nearly as good as
she thinks she is, but she sings full throttle.
We FIND Malee, sitting in the flute section and playing along
with the rest of the orchestra. She looks to the front row,
but Gus is no where to be found.
The girl finishes her song, and the crowd politely applauds.
Mr. Farmer crosses to the microphone.
MR. FARMER
I’m sure Bette Midler would be most
impressed with that rendition.
The crowd laughs. Mr. Farmer didn’t mean for it to be a
joke.
MR. FARMER (CONT'D) (cont’d)
Anyway, our next soloist is Malee
Chung. She will play the theme
from “Love Story” on the flute.
The crowd applauds as Malee rises and crosses to the
microphone.
MALEE
Thank you, Mr. Farmer.
Malee spots Gus, walking down the aisle. He scurries into
the front row and sits. Malee lights up.
MALEE (CONT'D) (cont’d)
There’s actually been a change.
I’m not going to play the theme
from “Love Story”. Um... this is a
song...
Mr. Farmer, waves to Malee from off stage. Malee looks at
him. Mr. Farmer mouths something to her.
MALEE (INTO MICROPHONE) (CONT'D)
(to Mr. Farmer)
What? I can’t hear you?
Mr. Farmer throws up his hands.
 47.
(CONTINUED)
MALEE (CONT'D) (cont’d)
Anyway. This is a song by The
Doors.
At the mention of The Doors, Gus’ smile instantly fades. The
coincidence is just too great.
Malee starts to play “Light My Fire”. She is good. Mr.
Farmer and the audience seem pleased by her euphonious
performance. Even Gus is won over. He appears entranced by
the music.
INT. SCHOOL AUDITORIUM - LATER THAT NIGHT
The recital is over. Most of the audience has filed out. A
few remain, offering their congratulations to the musicians.
Malee stands with Leonard.
MALEE
Where’s Jacob?
LEONARD
Couldn’t make it. He...
GUS (O.S.)
Malee.
Malee spots Gus, heading towards her.
MALEE
Oh my God! He’s coming over.
LEONARD
Who?
MALEE
Shut up! Leave now.
Malee pushes Leonard behind her just as Gus approaches.
GUS
You were awesome.
MALEE
Really? Be honest. I’d rather you
tell me I sucked then lie.
GUS
You were great.
Leonard peeks around Malee’s back.
 48.
CONTINUED:
(CONTINUED)
MALEE
Excuse me for a second.
Malee turns around and pinches Leonard.
LEONARD
Ow, ow, ow alright. I’m going.
Leonard walks off. Malee turns back around with a big smile
on her face. She plays coy.
MALEE
So you really enjoyed it?
GUS
Yeah. Good song. What made you
pick it?
MALEE
(covering)
Oh, uh... my mother was humming it
all last week. Big Doors fan.
GUS
Really? Is she here?
MALEE
No.
GUS
She missed out.
MALEE
You’re so sweet.
GUS
Yeah well, I have to go, but thanks
again. I had a great time.
Gus gives Malee an innocent kiss on the check and then walks
off. Malee melts. She stands frozen, clutching onto her
flute in ecstacy.
EXT. STREET - MORNING
With fire and determination, Leonard jogs. Unfortunately, he
is quickly winded by the run. He bends over, gasping.
SUPERIMPOSE SHOT OVER SHOT: Leonard appears, running past
his old, weaker self. Stronger, he makes a few more yards
and then is forced to stop.
 49.
CONTINUED:
(CONTINUED)
He leans over for air, and we SUPERIMPOSE another SHOT OVER
SHOT of Leonard, weeks later, running past his weaker self.
(This series of shots repeats a few more times, illustrating
the progression of time and weight loss.)
INT. LEONARD’S HOME - STAIRCASE/KITCHEN - DAY
Leonard runs up and down the stairs, sweating like crazy.
Grace appears, watching him around the corner. She shakes
her head and then returns to the kitchen.
GRACE
That boy is going to bring the
entire house down.
PATRICK
Let him be. He’s looking good.
I’m proud of him.
GRACE
(to the girls)
Girls, have you decided what you’re
going to go as for Halloween?
SARA
Either a witch or a princess.
GRACE
That’s nice. Haley?
HALEY
I’m going to go as a marble.
GRACE
What do you mean, a marble?
HALEY
You know, like a bag of marbles,
but just one marble.
INT. JUVY HALL - CONVERSATION BOOTHS - LATE AFTERNOON
Jacob and Jeff sit across from each other on the phone. Jeff
has two black eyes and a fat lip. He is crying profusely.
Jacob doesn’t appear at all sympathetic.
JEFF
I’m really sorry, man. I...
 50.
CONTINUED:
(CONTINUED)
JACOB
You just think about what I said.
Get out of my sight. And send
Kenny in on your way out.
Jeff rises and walks to a door, leading to the jail. A
moment later, Kenny enters, looking pissed off. He sits
across from Jacob and picks up the phone.
KENNY
What did you say to him?
JACOB
I thought you’d both like to know
that Halloween was Rudy’s favorite
holiday.
Jacob picks up some pictures and presses them against the
glass.
JACOB (CONT'D) (cont’d)
These are pictures from every
single Halloween since we were
five. You see how happy he was?
KENNY
Stop it.
JACOB
After we’d go trick or treating,
we’d sit in our room and swap the
candy we hated. Rudy loved
Snickers, I Almond Joys.
KENNY
Almond Joy sucks.
JACOB
What sucks is that I’ll never get
to sit in my room and swap candy
with my brother ever again. Thanks
to you.
KENNY
Why are you doing this?
JACOB
To remind you.
 51.
CONTINUED:
(CONTINUED)
KENNY
How could we forget? You been
coming here for months to “remind
us”.
JACOB
No one is forcing you to talk to
me.
KENNY
Anything to get out of my cell.
JACOB
Is your cell small?
KENNY
Yes.
JACOB
So is a coffin.
KENNY
You’re not the only one who wishes
he was still alive. I’d do
anything to bring him back, but I
can’t. It’s not easy being in
here. Hell, you saw Jeff.
JACOB
What happened to him?
KENNY
He pissed off the wrong guy off.
Jeff is totally fucked right now.
JACOB
Good.
KENNY
Don’t come back here ever again.
JACOB
Free country. I’ll come if I want.
KENNY
Don’t expect me to show up.
Kenny slams down the phone and exits. Jacob smiles, having
shaken him.
 52.
CONTINUED: (2)
INT. LEONARD’S HOME - FRONT DOOR - THAT NIGHT
Grace hands out candy to a few trick or treaters at her door.
GRACE
Be careful now. Have a good night.
INT. KITCHEN - CONTINUOUS
Grace crosses to the kitchen table where Pat is doing a
crossword puzzle.
GRACE
Kids keep coming later every year.
SFX: FRONT DOOR, opening and closing.
Haley and Sara storm into the kitchen in tears. Haley is
dressed as a MARBLE, and Sara is dressed as a WITCH.
HALEY
I hate him! I hate him!
GRACE
Who? What happened?
HALEY
Leonard! He threw away all our
Halloween candy.
GRACE/PATRICK
What?
SARA
He grabbed our bags and just threw
them down a gutter.
Leonard enters. Haley and Sara run out of the kitchen.
PATRICK
What the hell is going on? Why did
you throw away their candy?
LEONARD
Because their sugar intake is
completely unhealthy. Besides,
Halloween is supposed to be a
celebration of evil. How did candy
get wrapped into it?
 53.
(CONTINUED)
GRACE
I am going to ask you this once,
and I want a straight answer. Are
you in a cult?
PATRICK
Grace!
GRACE
This is what happens when kids join
cults. The first thing they change
is their diets.
LEONARD
I’m not in a cult. This is all
information you can find in books.
GRACE
The issue here is that you have
stolen one of the most exciting
nights of the year from your
sisters.
PATRICK
If anybody had done this to you
when you were a child, we never
would have heard the end of it.
LEONARD
I wish somebody had done it to me.
I wish either one of you had given
a shit about my weight.
Leonard storms out of the kitchen. Patrick and Grace are
speechless.
INT. LEONARD’S ROOM - MOMENTS LATER
Leonard lies on the floor, doing sit-ups. He can actually do
a few now. Patrick bursts into the room.
PATRICK
I do not care for your language.
LEONARD
I’m only trying to help you guys.
Leonard stops exercising.
LEONARD (cont’d)
You’re fat dad. Mom is fat. Us
kids are fat.
 54.
CONTINUED:
(CONTINUED)
PATRICK
What’s your point?
LEONARD
Dad, you and mom are going to die
young if you keep eating as poorly
as you do.
PATRICK
What is this obsession you have
with weight?
LEONARD
The coach for Jefferson High is
also my gym teacher. He told me
that if I got into shape, I could
start as center for the Freshman
team when I get to high school.
PATRICK
Center is a great position.
Toughest guy on the field. A good
center can make or break a team.
LEONARD
I know. That’s why I’m trying so
hard to get into shape. You guys
should to. At the rate you’re
going, you won’t make it to your
60’s.
PATRICK
Look, Leonard. Your mom, to her, a
tasty meal is just a way of showing
she cares.
LEONARD
She doesn’t! Tonight she served
spaghetti and meatballs from a can.
The amount of sodium alone can
wreck havoc on a person’s blood
pressure. Not to mention...
PATRICK
Leonard, people just don’t drop
dead from eating meatballs.
Off Leonard’s look -
EXT. CONSTRUCTION SITE - DAYS LATER - AFTERNOON
Malee hands Gus her bag of Halloween Candy.
 55.
CONTINUED:
(CONTINUED)
GUS
I can’t take your Halloween candy.
MALEE
You’ll be doing me a favor.
Chocolate gives you zits. Besides,
if I want to keep this firm ass as
an adult, I gotta develop good
eating habits now.
GUS
(uncomfortable)
Maybe just a snickers.
Gus opens a snickers bar and starts eating.
MALEE
So work is good?
GUS
To be honest, I can’t wait till
this job is finished. This place
is creepy. You know, a boy died
here like right before we started
working.
MALEE
Rudy. His name was Rudy.
GUS
You knew him?
MALEE
He was one of my best friends.
Remember that funeral I went to?
GUS
That was him?
MALEE
I thought you knew. Two boys threw
a flaming cocktail at him. Can you
imagine killing someone like that?
How evil can you get?
Gus eyes Malee, completely unsettled.
INT. APARTMENT BUILDING - NIGHT
Obviously drunk, Gus stumbles to his front door. He fumbles
for his keys and enters.
 56.
CONTINUED:
INT. GUS’S APARTMENT - BEDROOM - LATER
Gus lies in bed with a bottle of whiskey in one hand and a
GUN in the other. Distraught and at the point of tears, Gus
opens the chamber and loads the gun with a single bullet.
Then he spins the chamber and locks it. Gus puts the gun to
his head and fires. NOTHING. He throws the gun across the
room, grabs the bottle of whiskey and drinks it till it’s
gone.
INT. JACOB’S HOME - KITCHEN - NEXT MORNING
Ashley stands with a big smile on her face.
ASHLEY
Jeff Laskey is dead.
Jim and Jacob look up, stunned.
JIM
What?
ASHLEY
He committed suicide in his jail
cell last night. Sally Yngve
called just now to tell me.
Jim and Jacob sit, stunned. Their shock turns to intrigue as
Ashley, appearing unaffected by the news, crosses to the
kitchen table, opens a nearby box of donuts and begins
eating. She is smiling.
JACOB
Why are you smiling? A boy died.
ASHLEY
No, a monster that murdered my son
died. Justice is served; end of
story.
Ashley crosses to the kitchen sink. She rolls up her sleeves
and begins cleaning. Jim crosses over to her and they kiss
as if nothing happened. Jacob is baffled by their behavior.
INT. JUVY HALL - COMMUNICATION BOOTH - LATER THAT NIGHT
Jacob and Kenny are on the phone together. Kenny looks gaunt
and tired. Jeff’s death has obviously affected him.
 57.
(CONTINUED)
KENNY
He used his bed sheet, waited until
lights out and then jumped.
JACOB
That’s terrible.
KENNY
His cell mate let him hang there
the entire night.
JACOB
I’m sorry, Kenny.
KENNY
Like you even give a shit. I bet
when you heard, you started
dancing.
JACOB
No.
KENNY
I knew he wouldn’t make it. It’s
my fault too. Jeff wasn’t a saint
when I met him, but he sure as hell
wasn’t headed here.
(tearing up)
That fucking asshole!
Kenny drops the phone and begins crying in his arms. Jacob
watches through the glass, touched by Kenny’s reaction.
MUSIC OVER SHOT: UPBEAT CHRISTMAS MUSIC
INT. JACOB’S HOME - LIVING ROOM - CHRISTMAS MORNING
Jacob sits on the floor, surrounded by boxes and wrapping
paper. Santa has obviously been good to him.
Jim sits on the couch, drifting in and out of sleep.
Ashley, dressed in her finest Christmas sweater, peruses the
fireplace mantel and all of the decorations that line it.
She is a drastically different woman than the last time we
saw her. She looks upbeat and pretty.
JACOB
An IPOD! Sweet!
Ashley looks at Jacob and smiles. He has just unwrapped an
IPOD.
 58.
CONTINUED:
(CONTINUED)
ASHLEY
You like it?
JACOB
I love it. You guys went crazy
this year.
Ashley smiles at her son. It’s a bittersweet moment for her.
JIM
I’m going to shower.
ASHLEY
Jim, Jacob still has one more
present.
JIM
I thought we were going to wait.
JACOB
No, do it now! Now!
Ashley crosses to the couch and sits beside Jim. They hold
each others hands.
ASHLEY
After serious debate, your father
and I have decided... to adopt A
BABY!
JACOB
What?
JIM
We’re gonna adopt a baby.
Hopefully a boy.
Off Jacob’s shock -
INT. LEONARD’S HOME - DINING ROOM - DAY
Leonard’s extended family sits at the kitchen table, eating
Christmas dinner. His extended family is just as overweight
as his immediate. Leonard barely touches his own plate, too
disgusted to eat. He rises.
LEONARD
May I be excused?
The entire family stops eating and turns to him.
 59.
CONTINUED:
(CONTINUED)
GRACE
No!
Leonard sits back down. His family quickly resumes eating.
INT. MALEE’S HOME - DEN - EVENING
Malee does her homework, Yacoo flips through a fashion
magazine.
MALEE
Why do I have to do this? It’s
Christmas break.
YACCO
You’ll be one step ahead in
January.
MALEE
Just because you’re an atheist, I
don’t get to celebrate the
holidays.
Yacco shoots Malee the look of death.
MALEE (CONT'D) (cont’d)
Don’t you find it hard not
believing in anything?
YACCO
Malee.
MALEE
I’m going for a bike ride.
YACCO
There’s a foot of snow outside.
MALEE
The streets are ploughed. Besides,
I like looking at all the lights.
YACCO
Be home in an hour. Be careful.
EXT. 7-11 PARKING LOT - LATER THAT NIGHT
Malee flips through a TELEPHONE BOOK. She comes to Gus’ name
and rips out the page.
 60.
CONTINUED:
INT. GUS’ APARTMENT BUILDING - OUTSIDE HIS DOOR - LATER
Malee knocks on Gus’ door, but he doesn’t answer. Then Malee
spots a WELCOME MAT. She kicks it aside and discovers a
SPARE KEY underneath.
INT. GUS’S APARTMENT - CONTINUOUS
Malee cautiously enters, shutting the door behind her. A
beat. She allows the excitement to settle in. It’s your
typical bachelor pad. Stray beer bottles decorate every
shelf and end table. Dirty clothes drape across an old
couch. Malee continues on to the kitchen.
INT. GUS’ APARTMENT - KITCHEN - CONTINUOUS
Malee finds the kitchen more of a mess than the living room.
Pots, pans and stacks of TV dinners line the counter top.
INT. GUS’S APARTMENT - BEDROOM - MOMENTS LATER
Malee enters and stops cold at the sight of the bed. Its
unmade and the sheets and blankets are entangled in a ball.
Aroused, Malee sits on the bed and then lies back in ecstacy.
EXT. FRONT OF GUS’ APARTMENT BUILDING - SAME TIME
Gus drives up, parks along the sidewalk, and gets out.
INT. GUS’S APARTMENT - BEDROOM - SAME TIME
Malee goes through a photo album. We see pictures of Gus,
dressed in a firefighter’s uniform. He appears much younger
and clean cut.
As Malee returns the album to the night stand, she notices a
an open drawer and peeks inside.
INT. APARTMENT BUILDING - STAIRWELL - SAME TIME
Gus lazily makes his way upstairs.
INT. GUS’S APARTMENT - BEDROOM - SAME TIME
Malee holds Gus’ gun. Complete with sound effects, she
pretends to shoot a beer bottle off the dresser.
Malee laughs and then jumps across the bed like a Charlie’s
Angel.
 61.
INT. APARTMENT BUILDING - GUS’S FRONT DOOR - SAME TIME
Gus fumbles for his keys.
INT. GUS’S APARTMENT - BEDROOM - SAME TIME
Malee stands in front of the mirror, posing.
MALEE
Freeze! That’s right.
Malee laughs in spite of herself. In the process, she
unknowingly cocks the trigger. Malee places the gun to her
forehead and pretends to shoot herself.
TIGHT ON TRIGGER, a hair away from firing -
SFX: BAM!
INT. GUS’ APARTMENT - FRONT DOOR - SAME TIME
The loud bang we heard was the front door slamming shut. Gus
opens it and inspects the door frame.
INT. GUS’ APARTMENT - KITCHEN/BEDROOM - SECONDS LATER
Gus removes a beer from the fridge. We follow him into his
bedroom. He stops cold as if feeling the presence of some
one else there, but Malee is nowhere to be found.
Gus begins getting undressed. We follow his shirt to the
floor and SEE Malee, hiding underneath his bed.
SFX: FOOTSTEPS, DOOR OPENING, SHOWER RUNNING
Malee looks out from underneath the bed. She watches as the
now naked Gus enters the shower stall in the bathroom.
As the water falls upon Gus, Malee rises from underneath the
bed and crosses over to him.
INT. GUS’ APARTMENT - BATHROOM - CONTINUOUS
From over Gus’s shoulder, we see Malee approaching. An inch
away from Gus, Malee reaches out her hand to touch him.
Suddenly, Gus breaks down and starts crying.
Unsettled, Malee slowly retreats out of the bathroom.
INT. JACOB’S HOME - BEDROOM - NEXT DAY
Malee, Leonard and Jacob sit, playing LIFE, the board game.
 62.
(CONTINUED)
LEONARD
Don’t worry, white male infants are
the hardest to come by. 60 minutes
did a whole story on it.
MALEE
Since when do you watch 60 minutes?
LEONARD
Since I was in the hospital. They
said, any adoption agency worth its
salt has at least a three year
waiting list. By the time your
parents get a kid, you’ll be in
college. You think they’ll want to
start over again with that baby
shit?
JACOB
No, but it’s like they’re trying to
replace Rudy.
LEONARD
It doesn’t matter cause it’s not
gonna happen.
Malee has been silent this entire time. Seeing a moment, she
speaks up.
MALEE
I’m thirsty.
(to Leanard)
Can you get us some drinks?
LEONARD
Why me?
MALEE
Because it’s the gentlemanly thing
to do.
JACOB
I’ll get the drinks.
MALEE
I’ll go with you.
LEONARD
Why are you all of a sudden going
to get the drinks?
 63.
CONTINUED:
(CONTINUED)
MALEE
(bitchy)
Because you’ve upset me, and I
don’t want to see you right now.
Leonard looks to Jacob.
LEONARD
Fine, I’ll get the drinks.
Leonard exits. Malee turns to Jacob.
MALEE
I need a favor. It’s big. I need
you to hide something for me.
JACOB
Hide what?
Malee reaches into her back pack.
MALEE
Promise, you won’t freak.
JACOB
I won’t.
Malee removes Gus’ gun.
JACOB (cont’d)
Holy shit!
MALEE
You said, you wouldn’t freak!
JACOB
That’s a gun.
MALEE
I know.
JACOB
Where’d you get it?
MALEE
I can’t tell you. I just need you
to hide it for a while. When all
is cool, I’ll come for it.
JACOB
Why can’t you keep it?
 64.
CONTINUED: (2)
(CONTINUED)
MALEE
My mother is a total snoop. She
goes through my stuff like all the
time.
(beat)
Please, Jacob. Somebody’s life
might depend on it.
Jacob crosses to his closet, removes his metal LOCK BOX and
opens it. Jacob takes the gun and places it inside.
JACOB
Is it loaded?
MALEE
No, but I do have some bullets.
Malee reaches into her backpack and removes the bullets.
Jacob takes them out and puts them in the lock box.
MALEE (CONT'D) (cont’d)
Sure your parents won’t find it?
JACOB
Nobody has the combination, but me.
Besides, I could be building a bomb
in here, and they wouldn’t even
know.
Off Jacob, locking the box up.
FADE TO BLACK:
FADE IN:
EXT. STREET - MONTHS LATER - MORNING
ON TWO FEET, running. We REVEAL that it’s LEONARD. His once
skin tight sweat suit, hangs off of him. More than just
skinny, Leonard is in perfect shape. He runs fast, carefully
avoiding puddles of melting snow. (Spring is fast on the
horizon.)
INT. JUVY HALL - CONVERSATION BOOTH - NEXT DAY
Jacob and Kenny talk via one way phone. Their demeanor has
changed since last we saw them. No longer fraught with
contempt and acrimony, they speak like two old friends.
JACOB
I sent in some comics for ya. The
X-men one is pretty sweet.
 65.
CONTINUED: (3)
(CONTINUED)
KENNY
That last batch was awesome.
Jacob checks his watch.
JACOB
I better get going, I don’t want to
miss my bus.
KENNY
Before you go, I got some news.
Apparently, the parole board feels
I’ve been a model prisoner, so
they’re giving me early release.
JACOB
What? How can they do that?
KENNY
I don’t know. They just did.
You’re pissed, aren’t you? I knew
you would be.
(off Jacob’s silence)
It was an accident, Jacob.
JACOB
So you’re getting out. Gonna head
back to school, or...
KENNY
Fuck school. I’m going to live
with my Dad in New Mexico. He’s
working on a ranch out there.
JACOB
You can’t leave the state. That
violates your probation. You’ll
have to...
KENNY
My dad won’t tell anyone. No one
will even care I’m out there.
JACOB
Your mom will.
KENNY
Jacob, in the entire time I’ve been
locked up, you were the only one
who came to see me. Trust me, she
won’t care.
 66.
CONTINUED:
INT. MALEE’S HOME - KITCHEN - AFTERNOON
Malee fans out a fist full of twenty dollar bills.
MALEE
200 dollars! Dad sent me 200
dollars!
Yacco, smiling, gets ready for work.
MALEE (CONT'D) (cont’d)
I have to call him.
YACCO
No!
(covering)
Your father... went out. He’s not
home right now.
Malee eyes her mother, suspicious.
MALEE
You’re acting weird. What’s going
on?
YACCO
Nothing.
MALEE
Well, do you want to come with me
to the mall and spend it?
YACCO
I’d prefer it if you’d put that
money in the bank.
(off Malee’s look)
Fine, spend it. You’ll have to do
it alone though. I have a patient
this afternoon. Have a good day.
Yacco exits the kitchen. Malee looks at her cash and smiles.
INT. LEONARD’S HOME - KITCHEN - SAME TIME
Leonard, Patrick and Grace sit at the kitchen table.
PATRICK
Here’s the deal. You know how my
company flies me to Florida every
April?
 67.
(CONTINUED)
LEONARD
You and I have been going since I
was eight. It’s the guy’s week
off.
PATRICK
This year, I’m taking the girls.
Just the girls. You’re staying
home.
LEONARD
Why can’t we all go?
GRACE
I’m not staying here all alone.
Besides, you said it yourself,
you’ve been going for years. Give
your sisters a chance.
Leonard eyes his mother with hatred.
LEONARD
Whatever.
(beat)
I need money.
PATRICK
What for?
LEONARD
Clothes. Nothing I have fits
anymore.
GRACE
Your father and I aren’t rich. You
can’t get a new wardrobe anytime
you want.
LEONARD
What am I supposed to do, go to
school naked?
GRACE
Wear a belt.
PATRICK
I’ll give him some cash, he can get
some clothes.
GRACE
No. He’s gonna gain all his weight
back in a few months.
 68.
CONTINUED:
(MORE)
(CONTINUED)
Then what, we have to buy him new
clothes all over again?
Obviously hurt, Leonard storms out of the kitchen.
PATRICK
Grace.
GRACE
What? It’s true.
Grace exits the kitchen.
JACOB (O.S.)
I thought you hated going to
Florida?
EXT. JACOB’S FRONT LAWN - LATER
Leonard and Jacob play catch with a football.
LEONARD
When I was fat. Now I don’t have
to wear a T-shirt when I go
swimming. Who knows, maybe I could
even get lucky.
JACOB
You’re still ugly, though.
Leonard punches Jacob’s arm in fun.
LEONARD
I don’t understand what my mother’s
problem is. It’s like the thinner
I get, the more she hates me.
JACOB
She’s probably jealous. Maybe you
should put her on that diet.
LEONARD
Anytime I mention it, my mother
goes crazy.
JACOB
If you really want her to drop a
few tons, put her in jail. Kenny’s
lost about 30 pounds since he’s
been incarcerated, and he was
already thin.
 69.
CONTINUED: (2)
GRACE (cont'd)
(CONTINUED)
LEONARD
Really?
JACOB
Yeah. Jail is the perfect weight
loss program. You take a fat tub,
throw them in a room and force them
to eat right and exercise. Don’t
let them out till they do.
Off Leonard, thinkingINT. MALEE’S HOME - BEDROOM - NIGHT
Yacco enters Malee’s room.
YACCO
Malee, dinner!
Yacco notices a number of department store bags strewn
everywhere.
YACCO (cont’d)
Malee?
(noticing something)
Oh my God!
REVEAL MALEE, standing across the room. She is no longer the
gawky, adolescent girl. Rather, she has been transformed
into a beautiful young woman. Her glasses have been replaced
by contacts, and her braided pig tails by a quaff of chin
length curls.
YACCO (CONT'D) (cont’d)
What did you do?
MALEE
I got a new look. You know, for
Spring. What do you think?
Malee spins around, giving Yacco the full picture.
YACCO
You look...
MALEE
Beautiful?
YACCO
Different. What happened to your
glasses?
 70.
CONTINUED:
(CONTINUED)
MALEE
Contacts. It took me like forty
five minutes to get them in, but
beauty is pain.
YACCO
Honey, in the future, I’d like to
know if you’re going to radically
change your appearance. Clean your
stuff up and come down for dinner.
Yacco exits. Malee looks in the mirror, deflated.
EXT. CONSTRUCTION SITE - AFTERNOON
Gus watches a CEMENT TRUCK, dumping cement into a foundation.
Once the cement is poured, the truck pulls forward. Malee is
revealed, standing there and holding a picnic basket.
Gus sees the new and improved Malee for the first time. His
jaw drops.
GUS
Malee? My God, you look...
MALEE
Different?
GUS
Beautiful. You look beautiful.
Off Malee’s smile -
EXT. CONSTRUCTION SITE - ANOTHER AREA - LATER
Gus and Malee eat their lunch.
MALEE
I felt like I needed a change, you
know?
GUS
I bet you’re driving the boys at
school wild.
MALEE
Boys my age are so immature. I’m
more attracted to older gentlemen.
Malee smiles at Gus. He knows where this is going, and he’s
suddenly nervous.
 71.
CONTINUED:
(CONTINUED)
GUS
You don’t want somebody that much
older than you. An age difference
can cause problems.
MALEE
What kind of problems?
GUS
A lot of times when a couple has an
age difference, they wind up
splitting up because they want
different things.
MALEE
You mean sex.
GUS
No.
Gus catches a look of relief on Malee’s face.
GUS (cont’d)
I mean, yeah. You may be 13, but a
boy even three years older than you
is probably more “experienced”.
Boys can be impatient about that
sort of thing.
MALEE
Are you impatient?
GUS
No, but when I was a kid.
MALEE
Why don’t you have a girlfriend?
GUS
I did, but it didn’t work out.
MALEE
How old was she?
GUS
About my age.
MALEE
See that, age wasn’t an issue, yet
you still wanted different things.
I don’t think it’s about age.
 72.
CONTINUED:
(MORE)
(CONTINUED)
I think when two people connect,
they connect for other reasons.
And since soulmates are eternal,
they have no age.
Gus is stumped.
EXT. LEONARD’S DRIVEWAY - NEXT DAY
Leonard watches Patrick and his sisters drive off in a
TAXICAB.
LEONARD
(calling after them)
Have a good flight!
The taxicab disappears down the street.
As Leonard turns back around, he sees Grace, staring at him
from the window. They lock eyes for a moment and then Grace
disappears into the dark recesses of the home.
INT. LEONARD’S HOME - BASEMENT - NIGHT
Leonard descends the staircase and begins looking around at
the setting. Boxes of junk clutter the floor along with old
furniture and bicycles.
He crosses to the basement door, which leads out to the
backyard. As Leonard unlocks and opens the door, a mass of
cobwebs stretch across the frame like elastic bands. Leonard
grabs a nearby broom and starts wiping away the cobwebs.
INT. JACOB’S HOME - BEDROOM - DAYS LATER
Jacob sits at his desk, reading the PLASTIC SURGERY PAMPHLET
his parents had given him for his birthday last year.
The bedroom door opens and Ashley sticks her head in.
ASHLEY
We’re home.
JACOB
Hi.
ASHLEY
Could you come downstairs for a
minute. We have a surprise for
you.
 73.
CONTINUED: (2)
MALEE (cont'd)
INT. JACOB’S HOME - KITCHEN - MOMENTS LATER
Jacob stands in front of KEITH GARDNER (10), African
American, sweet faced and dressed in a shirt and tie. He has
luggage with him.
Ashley and Jim stand behind the boys, beaming.
JIM
This is Keith Gardner. You’re new
brother. Keith our son, Jacob.
Keith extends his hand.
KEITH
It’s nice to meet you.
INT. JACOB’S HOME - BEDROOM - LATER
Jacob leads Keith inside.
JACOB
You get top bunk.
KEITH
I’m kind of afraid of heights.
JACOB
Sucks to be you.
Keith lets Jacob’s attitude pass.
JACOB (CONT'D) (cont’d)
No offence, but I never thought my
future brother would be a... well,
a “brother”.
KEITH
I never thought my future brother
would have a KOOL AID stain,
smeared across his face.
JACOB
Fuck you, it’s a birthmark!
KEITH
We’re getting off on the wrong
foot.
 74.
(CONTINUED)
JACOB
When my parents said they were
taking in an orphan, I pictured a
baby. So what happened, your
parents die or something?
KEITH
I was given up at birth.
JACOB
You gonna try and find your mother
when you’re 18?
KEITH
As far as I’m concerned, the fact
she had me was enough. I don’t
need to show up one day and disrupt
her life.
JACOB
Oh, but it’s okay to just show up
one day and disrupt mine?
Off Keith’s hurt look -
INT. LIBRARY - LATER
Malee stands at the card catalogue, flipping through the “S”
section. She comes to cards with the word SEX in the title.
INT. MALEE’S HOME - BEDROOM - EARLY EVENING
Malee enters her room, locks the door behind her and empties
her bag of SEX books on the bed. The first one she peruses
is the “KARMA SUTRA”. At first glance, Malee’s eyes go wide
in shock. She grabs her backpack and removes a number of
index cards. Malee starts taking notes.
INT. JUVY HALL - COMMUNICATION BOOTHS - NEXT DAY
Jacob is on the one way phone with Kenny.
JACOB
He’s not some baby. He’s like 10.
KENNY
You’re blaming me for this?
JACOB
No. But can you believe it?
 75.
CONTINUED:
(CONTINUED)
KENNY
Maybe this is the only way they can
get over Rudy’s death.
JACOB
He’s a person not a fucking vase.
KENNY
I know.
JACOB
I gotta get out of there. I can’t
live in that house for one more
day. I want to go with you to New
Mexico.
KENNY
No way. You’ve never even been
out on the road.
JACOB
So.
KENNY
It’s not easy. After first night
falls, you’ll be pissing yourself.
JACOB
No, I won’t.
KENNY
You don’t need me to run away from
home.
JACOB
That’s not what this is about.
KENNY
Yes, it is.
(beat)
And you want to come with ME of all
people. Are you forgetting, I was
the one who killed Rudy!
JACOB
That was an accident.
Kenny appears stunned. Jacob has never accepted that truth.
 76.
CONTINUED:
(CONTINUED)
JACOB (CONT'D) (cont’d)
I’ll be helpful. I can get
everything we’ll need together. As
soon as you’re released, we can go.
Kenny appears to be weighing the decision.
JACOB (CONT'D) (cont’d)
Please.
KENNY
If this is what you want. Alright.
INT. MALEE’S HOME - KITCHEN - SAME TIME
Yacco is on the phone with her ex-husband.
YACCO (INTO PHONE)
... I’m not asking for much. Just
call her from time to time...
Because she needs to know her
father cares... Call collect.
Malee enters the kitchen.
MALEE
Is that Dad? Can I talk to him?
YACCO
Take some responsibility for
yourself and grow... Hello?...
Yacco slams the phone down.
YACCO (CONT'D) (cont’d)
He hung up.
MALEE
Well, what do you expect? All you
ever do is yell at him.
YACCO
Malee, you don’t understand.
MALEE
He’s my Dad! I’m sorry if it
bothers you, but I love him. You
keep this up then one day, when I’m
old enough, I’ll leave here and go
and stay with him.
Malee runs out of the room, leaving a disappointed Yacco.
 77.
CONTINUED: (2)
INT. LEONARD’S HOME - BASEMENT - NIGHT
Leonard hammers a piece of wood over the basement door, which
is now entirely boarded up.
REVEAL the basement. Now clean. Boxes, furniture and trash
are piled neatly in a corner. Only a mattress remains on the
floor in the center of the room.
Leonard grabs a grocery bag and crosses to a bathroom at the
opposite end of the basement.
INT. LEONARD’S HOME - BASEMENT BATHROOM - CONTINUOUS
Leonard turns on the light, revealing a shower, toilet and
sink. He removes toiletries from the grocery bag and places
them inside.
INT. LEONARD’S HOME - DEN - SAME TIME
Grace watches FAMILY FEUD while eating cake.
LEONARD (O.S.)
(screaming)
Help! Oh God, Ma! Help!
Grace drops her fork.
GRACE
Leonard?
Grace jumps up and runs out of the room.
INT. LEONARD’S HOME - HALLWAY - CONTINUOUS
Grace opens the door to the staircase, which leads to the
basement.
GRACE
(screaming)
Leonard, what’s wrong?
LEONARD (O.S.)
It’s on top of me. I can’t get up!
Oh, there’s so much blood!
GRACE
I’m calling 9-1-1!
LEONARD (O.S.)
Get it off me first! I’m bleeding.
 78.
(CONTINUED)
GRACE
If I go downstairs, I won’t be able
to make it back up. Let me call
9-1-1 first, okay?
Leonard doesn’t answer her.
GRACE (CONT'D) (cont’d)
Leonard?
Silence.
GRACE (CONT'D) (cont’d)
Oh, Jesus!
Grace begins walking downstairs. Due to her size, she has
difficultly maneuvering through the tight space. Her
inability to see her feet isn’t helping matters.
Grace makes it downstairs, but Leonard is nowhere in sight.
GRACE (CONT'D) (cont’d)
Leonard?
Suddenly, Leonard bursts through the bathroom door with a
hammer in hand. He runs past Grace and up the stairs.
GRACE (CONT'D) (cont’d)
What the hell?
Half way up the stairs, Leonard stops and pries two of the
steps off the stair case with his hammer. This creates a
GAP, making it virtually impossible for Grace to ascend.
GRACE (CONT'D) (cont’d)
What are you doing? I can’t climb
up now!
Leonard runs upstairs and slams the door after him.
GRACE (CONT'D) (cont’d)
Leonard! Leonard!
EXT. GUS’ APARTMENT BUILDING - SAME TIME
Malee watches as Gus enters his car and drives off.
INT. APARTMENT BUILDING - HALLWAY - SECONDS LATER
Malee crosses to Gus’ door with a GROCERY BAG in hand. She
kicks the welcome mat aside, picks up the spare key and
enters.
 79.
CONTINUED:
INT. GUS’ APARTMENT - KITCHEN - CONTINUOUS
Malee enters and removes a pair of rubber gloves, a bottle of
ammonia and trash bags. She starts cleaning.
INT. LEONARD’S HOME - BASEMENT - LATER THAT DAY
Leonard descends the staircase, holding a tray of food.
Grace instantly rises.
LEONARD
I hope someone is hungry.
GRACE
Get me out of here now!
LEONARD
No joke, Ma. For the next two
weeks while Dad and the girls are
away, you will be kept down here.
I’ll provide you with nutritious
meals and plenty of water. You,
mother, will learn what it means to
be healthy.
GRACE
That’s what this is about, food?
LEONARD
I’m trying to save your life, mom.
Trying to give you a life. Cause I
love you.
GRACE
My life is fine. I don’t need you
to “save me”.
Leonard looks at his mother, sympathetic.
LEONARD
You don’t even realize how sick you
are. It’s a problem when an
otherwise healthy woman can’t drag
her ass up a flight of stairs
because she’s so obese. You’re
staying down here.
Leonard turns and crosses back to the staircase.
LEONARD (CONT'D) (cont’d)
Oh, and no cigarettes either.
 80.
INT. GUS’ APARTMENT - KITCHEN - EVENING
The kitchen is now spotless. Malee removes TWO TV DINNERS
from the oven. She crosses over to the kitchen table and
places the food onto plates.
The table is set to the nines. A small candle burns in the
center. Once the table is set and the food served, Malee
takes a step back and smiles.
INT. GUS’ APARTMENT - BATHROOM - LATER
Malee strips off her clothes and puts on a long, silk robe.
EXT. GUS’ APARTMENT BUILDING - SAME TIME
Gus drives up, gets out of his car and enters the building.
INT. APARTMENT BUILDING - HALLWAY - MOMENTS LATER
Gus approaches his door. As he takes out his key, he notices
that the welcome mat has been pushed off to the side. Gus
lifts the mat up and sees that his spare key is gone.
INT. GUS’S APARTMENT - FRONT ENTRANCE/ KITCHEN - CONTINUOUS
Gus enters. He knows someone else is in there.
GUS
Hello?
We follow him into the kitchen and FIND MALEE, standing
beside the table and dressed only in her robe.
GUS (CONT'D) (cont’d)
What the hell is this?
MALEE
I made dinner, my love. And I have
a surprise.
GUS
You’ve been in my apartment before,
haven’t you?
Malee drops her robe, revealing her naked body. Gus quickly
looks away.
GUS (CONT'D) (cont’d)
Malee, put your clothes on now!
 81.
(CONTINUED)
MALEE
Don’t you like my body?
Malee starts walking towards him.
GUS
Malee, stop.
MALEE
It’s okay because I love you.
Gus doesn’t answer. Malee is right behind him now. She puts
her head on his back.
MALEE (CONT'D) (cont’d)
Touch me.
Gus slowly turns around and looks at Malee for a long,
pregnant beat. It’s a tense moment, and we are unsure of
what he’s going to do. Then Gus moves past her and crosses
to the living room.
MALEE (cont’d)
Where are you going?
GUS
To go call your mother.
Gus exits. Malee stands the fool.
MALEE
But we’re soulmates.
Now embarrassed and crushed, she starts to cry.
EXT. GUS’S APARTMENT - LATER THAT NIGHT
Malee, now wrapped in a large overcoat, is led by Yacco out
of the building and over to her car.
INT. YACCO’S CAR - CONTINUOUS
Yacco and Malee sit in silence. After a beat.
YACCO
I don’t know what to say to you.
INT. JACOB’S HOME - BEDROOM - AFTERNOON
Jacob shoves clothes into his backpack.
Keith enters with Rudy’s baseball glove on his hand.
 82.
CONTINUED:
(CONTINUED)
KEITH
Wanna play some catch?
Jacob notices the glove. He rushes over to Keith, yanks it
off his hand and pushes Keith to the ground.
JACOB
Where the hell did you get this?
KEITH
The closet. Ow, what’s wrong?
Keith struggles to get free, but Jacob is too strong.
KEITH (CONT'D) (cont’d)
You’re hurting me.
JACOB
Did I say you could play with the
glove? Did I?
KEITH
No, I just...
JACOB
Everything, and I mean, EVERYTHING
in this room is mine. You are not
allowed to touch a thing,
especially the glove.
KEITH
Okay, okay.
Jacob gets off of Keith and crosses to his closet. He pulls
out the lock box, unlocks it and removes the gun. He points
it at Keith.
JACOB
If you tell my parents what I said,
I’ll kill you. I’ll shoot you in
the fucking face, I swear it!
Keith nods, petrified. Jacob puts the gun back in the lock
box, throws it in the closet and storms out of the room.
INT. JACOB’S HOUSE - KITCHEN - MOMENTS LATER
Ashley sits at the kitchen table, looking at a picture of
Rudy and Jacob when they were infants. Her eyes are filled,
but she’s not crying.
 83.
CONTINUED:
(CONTINUED)
Jacob enters and crosses to the fridge. He spots Ashley and
is taken aback by her state.
JACOB
(cold)
What’s wrong now?
ASHLEY
I was looking at a picture of you
and Rudy when you were born. God,
I miss him.
JACOB
But you have Keith now
Ashley is struck by Jacob’s comment.
ASHLEY
What the hell does that mean?
JACOB
You have Keith. Two boys again.
Everything is fine.
ASHLEY
We didn’t adopt Keith to replace
Rudy.
JACOB
Didn’t you?
ASHLEY
For your information, your father
and I discussed adopting for years.
JACOB
(not buying it)
Right. Maybe if it was me who
died, you wouldn’t need another kid
to get over it.
ASHLEY
How can you say that? I never
wanted either of my children to
die.
JACOB
But one of us did. If you had to
choose which one, I bet you wish it
was me.
 84.
CONTINUED:
(CONTINUED)
ASHLEY
I know you think we favored Rudy...
JACOB
You did! Admit it.
ASHLEY
I admit he was easier to raise, but
we didn’t love him more. Jacob,
listen to me. You came with a
different set of challenges.
JACOB
My birthmark.
ASHLEY
It’s not easy being different...
JACOB
(screams)
I’m not different!! You always
made me feel like something was
wrong. There’s nothing wrong with
me.
ASHLEY
I know...
JACOB
No, you don’t! It’s like you don’t
know how to deal with me. You
never did.
ASHLEY
I’m sorry if that is how you feel.
You do the best you can as a
parent. You don’t always know
what’s right. But you’re my son.
I’d do anything for you. I’d fight
for you, I’d kill for you, I’d die
for you.
JACOB
Rudy used to say that exact same
thing.
ASHLEY
It’s true. And as unchristian as
it sounds, I still want the boy
that killed Rudy dead. Someday,
when you grow up, you’ll understand
what I mean. Someday.
 85.
CONTINUED: (2)
INT. LEONARD’S HOME - BASEMENT - SAME TIME
SFX: TOILET FLUSHING
Grace exits the bathroom and begins walking around the
basement, looking for a way out. She crosses to the boarded
up door and tries to pull the boards off. Unsuccessful, she
returns to the bed and sits.
After a beat, Grace spots the tray of food, which is still
untouched. Angry and disgusted, she takes it and throws it
at the wall.
CUT TO:
LATER THAT NIGHT -
Grace paces nervously while blabbering to herself.
GRACE
When Pat calls, and I don’t answer,
he’ll know something is wrong.
He’ll know. I’ll be fine.
CUT TO:
LATER THAT NIGHT -
Grace nervously rocks back and forth. Sweat covers her body.
She glances at the tray of food, which rests on the floor.
CUT TO:
LATER THAT NIGHT -
Grace stands at the base of the stairwell, screaming.
GRACE
Open this door now! Let me out,
God damn it! Leonard!
CUT TO:
LATER THAT NIGHT -
Grace is crying. She catches sight of the meal that she
threw on the floor.
After a beat, Grace crawls over to it and starts shoving it
down her throat. She doesn’t seem bothered by the fact that
her dinner is covered with dirt.
 86.
INT. YACCO’S OFFICE - RECEPTION AREA - NEXT DAY - AFTERNOON
Yacco exits her office to find Gus waiting for his session.
They speak not a word. He rises and enters the office. She
follows, shutting the door behind her.
INT. YACCO’S OFFICE - CONTINUOUS
Gus and Yacco sit in their respective seats.
YACCO
Before we begin, I want to
apologize. I should have known
what was going on with Malee.
GUS
It’s my fault. I knew she had a
crush on me. I guess, I felt bad
for her. She’s a very unhappy
girl.
Yacco looks down, embarrassed.
GUS (CONT'D) (cont’d)
If it’s any consolation, the whole
thing was very “therapeutic” for
me.
(off Yacco’s look)
Sorry. That was a very selfish
thing to say.
YACCO
This is your therapy. Not mine.
Why was it therapeutic?
GUS
I slept last night. I can’t
remember the last time I slept so
deep or so sound. I don’t remember
dreaming or anything.
YACCO
Why do you think that is?
GUS
One of the last fires I ever fought
was a brownstone, beautiful. The
place was burned from roof to
basement. Whole family was wiped
out. When I was upstairs,
inspecting, I found a girl. She
couldn’t have been more than 12.
 87.
(MORE)
(CONTINUED)
The whole right side of her face
was burnt off, but her eyes were
open. She was alive. The pain must
have been excruciating. She was
begging for me to... kill her.
YACCO
What did you do?
GUS
Exactly what she wanted. I placed
my hand over her mouth and what was
left of her nose, and I... I killed
her. I told myself it was the
right thing to do, but I’ve never
been sure.
YACCO
What does this have to do with
Malee?
GUS
When I saw her last night, she had
the same look on her face as that
girl. She just wanted me to take
away her pain.
Yacco sits, pondering all of this.
GUS (CONT'D) (cont’d)
Doctor?
YACCO
Would you mind if we... cut out
early today? No charge.
GUS
I understand.
Gus rises and exits.
Yacco sits alone and starts crying.
INT. LEONARD’S HOME - KITCHEN - MOMENTS LATER
Leonard is at the kitchen sink, arranging a fruit salad.
SUDDENLY, he hears the sound of water boiling over from the
stove. Leonard quickly turns the gas low, extinguishing the
flame. He removes the pot from the burner, grabs a strainer
and removes poached EGG WHITES from the water.
 88.
CONTINUED:
GUS (cont'd)
(CONTINUED)
Leonard grabs a dish towel and begins wiping the water off
the stove. Preoccupied, he doesn’t realize that when he
wipes the oven knob dry, he turns the gas on high. (Since
the overflowing water, extinguished the pilot light, he is
unaware that gas is now being emitted from the burner.) In
his condition, HE WON’T BE ABLE TO SMELL IT.
Leonard grabs the plates of food and exits the kitchen.
SFX: GAS LEAKING
INT. LEONARD’S HOME - BASEMENT - MOMENTS LATER
Leonard places the food by Grace’s bed. She is sleeping.
INT. LEONARD’S HOME - KITCHEN - MOMENTS LATER
Leonard sits on the couch, watching TV. Suddenly, he starts
coughing, hard. The fit subsides and Leonard resumes
watching TV, thinking nothing of it.
INT. MALEE’S HOME - KITCHEN - EVENING
SFX: TELEPHONE
Malee enters the kitchen and answers the phone.
MALEE (INTO PHONE)
Hello?... Daddy!... No, she’s not
home... Can I ask you something?
Can I visit you for a while?... A
week... But I can fly alone... No,
I understand... Yeah... I love y...
Hello?...
Malee hangs up the phone. Tears swell in her eyes. She
places her head in her arms and start bawling.
YACCO (O.S.)
Honey?
Malee looks to find Yacco standing behind her.
MALEE
(through her tears)
Why does he hate me?
Yacco walks to Malee and hugs her tight. It’s a long,
overdue hug.
 89.
CONTINUED:
INT. LEONARD’S HOME - BASEMENT - LATER THAT DAY
Grace awakens from her nap. Suddenly, she sniffs at the air.
Grace rises and crosses over to the foot of the basement
stairs. She sees that the upstairs door is wide open.
GRACE
Leonard!
Silence.
GRACE (CONT'D) (cont’d)
Leonard, I smell gas!
INT. LEONARD’S HOME - DEN - SAME TIME
Leonard is slumped over, unconscious.
INT. LEONARD’S HOME - BASEMENT - SAME TIME
Grace coughs hard.
GRACE
Leonard, don’t you smell that...?
(sotto)
Oh God, he can’t. Leonard!
Leonard, the gas is on!
Grace grabs a hold of the railing and starts climbing the
stairs. After a few steps, she stops to rest, wheezing.
With the help of the railing, Grace pulls herself up to the
GAP in the staircase. In one forceful exertion, she propels
her body up and forward. The railing instantly becomes
separated from the wall. Grace lands in a heap.
Luckily, the top half of her body made it to the other side.
With all of her might, Grace pulls herself up to the landing.
INT. LEONARD’S HOME - KITCHEN - CONTINUOUS
Exhausted and wheezing, Grace drags herself over to the stove
and shuts the gas off. She looks around for Leonard and sees
him in the living room, slumped over and unconscious.
GRACE
No!
Grace frantically shuffles over to the living room.
 90.
(CONTINUED)
GRACE (CONT'D) (cont’d)
Leonard, wake up! Leonard!
INT. HOSPTIAL ROOM - NIGHT
Leonard slowly comes to in a hospital bed. The same nurse
from earlier is by his side.
NURSE
It’s alive!
LEONARD
What happened?
NURSE
Gas leak.
LEONARD
My mom, she’s...
NURSE
She’s fine. They’ve taken her into
surgery. She blew out her knees
somehow. We’re trying to get your
father on the phone right now.
LEONARD
I...
NURSE
Shh. You need your rest.
Everything is fine now.
EXT. CONSTRUCTION SITE - DAY
Jacob straddles his bike, watching a crew spread cement over
the foundation of a house. Jacob appears lost in thought.
He looks at a picture of Rudy and himself together.
Jacob touches his face in the photograph. He traces his
finger along the outline of his birthmark.
KENNY (O.S.)
Tonight, we ride.
EXT. TRAILER PARK - BESIDE KENNY’S TRAILER - DUSK
Jacob and Kenny share a cigarette.
KENNY
We got sleeping bags, a tent,
canteens and a lantern.
 91.
CONTINUED:
(MORE)
(CONTINUED)
I heard it’s supposed to rain, so
I’ll bring ponchos.
JACOB
(half hearted)
Cool.
Kenny eyes Jacob.
KENNY
You’re acting weird. You gonna
chicken out?
JACOB
No.
KENNY
You better not. I already packed
twice the amount of shit. I can’t
carry it all alone.
JACOB
I’ll be there.
KENNY
Good. I’m telling you, man. It’s
gonna be great.
JACOB
I guess.
KENNY
Come on. You can’t be a pussy all
your life.
JACOB
(beat, hauntingly)
I know.
KENNY
I’ll see you tonight. Don’t be
late.
Kenny rides off. Jacob watches him go. He has a lifeless,
almost calculating look in his eyes.
INT. HOSPITAL ROOM - NIGHT
Grace lies in a hosptial bed, watching TV. Leonard enters,
dressed in a hospital gown. Grace turns to him, smiling.
GRACE
Leonard!
 92.
CONTINUED:
KENNY (cont'd)
(CONTINUED)
LEONARD
I’m sorry, mom. I didn’t mean to
leave the gas on. It was an
accident. And everything that
happened, I... I just thought that
maybe, I could help you.
GRACE
Leonard, my mother died at 52. We
had to cremate her body because
they didn’t make a coffin big
enough for her to fit in. Even if
they had, no one could have carried
it.
(tearing up)
I loved her so much. I don’t want
that to happen to me.
LEONARD
It doesn’t have to.
GRACE
Even if I can manage the food...
Can you honestly see me, running a
marathon?
LEONARD
You don’t have to run a marathon.
You just have to run to the end of
the block. It’s not so hard as you
think it is.
GRACE
I’ll try.
Leonard leans over and kisses his mother’s forehead.
GRACE (cont’d)
I spoke to your father. He and the
girls caught a flight. They should
be here by morning.
LEONARD
Did you tell him what happened?
GRACE
I told him there was a gas leak.
LEONARD
I meant...
 93.
CONTINUED:
(CONTINUED)
GRACE
I know what you meant. I didn’t
tell him. I don’t think I will.
Leonard smiles.
INT. JACOB’S HOME - BEDROOM - MIDDLE OF THE NIGHT
Jacob lies awake, staring out the window. A heavy wind
blows.
SFX: WATCH ALARM
Jacob sits up and silences his watch alarm.
Keith awakens as well, but remains silent. He watches as
Jacob grabs a bag and exits the house through the window.
Once he’s gone, Keith gets off the top bunk, crosses to the
window and watches as Jacob runs off.
Immediately, Keith crosses to the closet. He removes the
lock box and begins trying combinations to open it.
EXT. CONSTRUCTION SITE - SHORT TIME LATER
A heavy rain begins to fall as Jacob rides up. He sees
Kenny, standing inside of a partially, constructed house.
KENNY
You’re late.
JACOB
I’m here.
Kenny throws Jacob a PONCHO.
KENNY
Put this on.
Jacob removes his backpack and puts on the poncho. Then he
opens his backpack and removes his HOCKEY MASK. (The same
mask he was wearing at the beginning of the movie.)
KENNY (CONT'D) (cont’d)
What the fuck is that?
JACOB
If people see me riding around in
the middle of the night, we’re
screwed. You didn’t bring a
disguise?
 94.
CONTINUED: (2)
(CONTINUED)
KENNY
Who gives a shit what I’m up to.
The boys start riding off in opposite directions.
KENNY (CONT'D) (cont’d)
The main road is this way.
JACOB
Yeah, but if we cut through the
construction site, we’ll hit the
railroad tracks. It’s faster and
no one will bother us.
KENNY
Good point.
Kenny files in behind Jacob, and the boys make their way deep
into the construction site. Thunder and lightning crash.
INT. JACOB’S HOME - BEDROOM - SAME TIME
Keith has forgone opening the lock box via a combination and
now tries to pry the top open with a SCREWDRIVER. He works
frantically, fearing Jacob’s return.
EXT. CONSTRUCTION SITE - SAME TIME
Jacob and Henry make their way to the edge of the
construction site. Suddenly, Jacob stops in his tracks.
KENNY
What’s wrong?
Jacob lifts the hockey mask.
JACOB
I can’t do this.
KENNY
What?!
Jacob begins rummaging through his backpack.
INT. JACOB’S HOME - BEDROOM - SAME TIME
Keith pries the box open. It’s EMPTY. No gun or bullets.
 95.
CONTINUED:
EXT. CONSTRUCTION SITE - SAME TIME
KENNY
Son of a bitch! I knew it. I knew
you’d chicken...
Jacob rises, holding the gun. He points it at Kenny.
KENNY (CONT'D) (cont’d)
What the fuck?
Jacob shakes, frightened and reluctant to do what he believes
he has to do.
JACOB
I can’t let you leave, Kenny. You
have to pay for what you did.
KENNY
Whoa, whoa hold on. Alright, I...
I won’t go. I’ll stay here. I’ll
do my probation.
Jacob cocks the gun. Tears stream down his checks.
JACOB
You killed him. I gotta do this...
for my family. It’s the only way.
KENNY
Jacob, I told ya, it... it was an
accident. I swear. Please, don’t.
This isn’t you.
JACOB
I know. But I can’t be a pussy all
my life.
Jacob fires. Kenny is hit in the head. He drops to the
ground instantly.
The force of the gun, knocks Jacob to the ground. As he
falls, the hockey mask comes down over his face.
Jacob sits for a beat, staring at Kenny’s lifeless body.
Lightning flashes, illuminating his blue eyes through the
hockey mask.
EXT. CONSTRUCTION SITE - SHORT TIME LATER
Jacob is inside one of the UNPAVED house foundations, digging
a hole. He cries, struggling to finish what he has done.
 96.
(CONTINUED)
Once a hole is dug, Jacob throws Kenny’s body inside and
starts covering it up with dirt.
INT. JACOB’S HOME - BEDROOM - LATER THAT NIGHT
Jacob climbs through his window, soaking wet. He crosses to
his closet and begins to change. Keith lies in bed, watching.
Jacob removes the gun from his pocket and places it back
inside the lock box. His hands shake violently. As he puts
the box back inside the closet. He finds Rudy’s glove. He
smells the leather and smiles.
Jacob takes the glove and crosses over to his bed. He places
the glove beside Keith.
KEITH
I thought I wasn’t supposed to
touch this.
JACOB
You’re awake.
KEITH
Yeah.
JACOB
It’s yours. Just don’t leave it
outside. If it gets wet, the
leather will crack.
KEITH
I’ll take good care of it. I know
this was Rudy’s.
Jacob lies down on his bed.
KEITH (cont’d)
Why do you have a gun?
JACOB
Just a b-b gun. I returned it to a
friend of mine.
(beat)
I’m sorry for being such an asshole
to ya.
KEITH
Does this mean we’re brothers now?
 97.
CONTINUED:
(CONTINUED)
JACOB
(beat, torn apart)
Yeah. We’re brothers.
Keith lies back in bed, smiling. Jacob rolls over, still
unnerved by what he is done. He’ll never be the same, and he
knows it.
EXT. CONSTRUCTION SITE - DAY
Gus loads cinder blocks into a wheel barrow.
MALEE (O.S.)
Gus?
Gus spins around, and finds Malee, standing there.
MALEE (CONT'D) (cont’d)
Before you freak out, I want to
tell you, I’m sorry. And to give
you this.
Malee opens her backpack and removes Gus’ GUN. Gus snatches
it from her.
GUS
Malee?
MALEE
Don’t be mad. I was just worried
about you. Now I’m out of your
life forever. Goodbye. Thanks for
not pressing any charges.
Malee walks off. Gus holds the gun in awe.
EXT. STREET - BESIDE THE CONSTRUCTION SITE - SAME TIME
TIGHT ON JACOB, staring at the construction site. We ZOOM
OUT and find him, straddling his bike.
Malee appears, walking over.
MALEE
Quite a storm last night.
They stand for a moment, watching the builders.
MALEE (cont’d)
Did you hear about Leonard?
Jacob nods, YES.
 98.
CONTINUED:
(CONTINUED)
MALEE (cont’d)
Only him. I was gonna go and visit
him at the hospital. You want to
come?
Jacob doesn’t answer. He is preoccupied with watching a
TRUCK pour cement into the foundation where Kenny is buried.
It’s a bittersweet moment. While relieved by the fact that
his crime will be hidden, the guilt overwhelms him.
MALEE (cont’d)
Earth to Jacob. You coming?
JACOB
Huh? Oh, yeah.
Jacob turns his bike around, and the two ride off together.
MALEE
You know, your birthday’s coming
up. Any hints as to what you might
like?
JACOB
Whatever you get me will be fine.
MALEE
(annoyed)
Right.
Malee eyes Jacob, sensing that something is wrong.
MALEE (CONT'D) (cont’d)
Are you okay?
JACOB
(lying)
Never better.
BACK ON the foundation. Gus enters frame and begins
spreading cement over Kenny’s grave.
FADE TO BLACK:
THE END
 99.
CONTINUED:

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
