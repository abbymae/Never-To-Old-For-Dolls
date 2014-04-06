// Created by iWeb 2.0.4 local-build-20140406

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Users/abbypowell/Desktop/Never-To-Old-For-Dolls/American_girl_world/Our_wonderful_Family_files/rss.xml",true,true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Users/abbypowell/Desktop/Never-To-Old-For-Dolls/American_girl_world',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Users/abbypowell/Desktop/Never-To-Old-For-Dolls/American_girl_world',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(262,262),new IWSize(262,51),new IWSize(314,328),27,27,0,new IWSize(-2,16)),new IWPhotoFrame([IWCreateImage('Our_wonderful_Family_files/GraphPaper_01.png'),IWCreateImage('Our_wonderful_Family_files/GraphPaper_02.png'),IWCreateImage('Our_wonderful_Family_files/GraphPaper_01.png'),IWCreateImage('Our_wonderful_Family_files/GraphPaper_01.png'),IWCreateImage('Our_wonderful_Family_files/GraphPaper_09.png'),IWCreateImage('Our_wonderful_Family_files/GraphPaper_08.png'),IWCreateImage('Our_wonderful_Family_files/GraphPaper_07.png'),IWCreateImage('Our_wonderful_Family_files/GraphPaper_01.png')],null,0,0.600000,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'Our_wonderful_Family_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Our_wonderful_Family_files/Our_wonderful_FamilyMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
