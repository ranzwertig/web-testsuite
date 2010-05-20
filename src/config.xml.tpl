<?xml version="1.0" encoding="utf-8"?>
<widget xmlns="http://www.w3.org/ns/widgets" xmlns:jil="http://www.jil.org/ns/widgets1.2"
	id="http://reference.vodafone.com/widgets/$testfilename" version="0.2"
	width="800" height="600">
	<width>800</width>
	<height>1000</height>
	<name>$test</name>
	<icon src="img/icon.png"/>
	<jil:maximum_display_mode height="800" width="600"/>
	<author href="http://vodafone.com" email="wk@uxebu.com">Wolfram Kriesing</author>


	<feature name="http://jil.org/jil/api/1.1/accelerometerinfo" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/account" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/accountinfo" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/addressbookitem" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/attachment" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/audioplayer" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/calendaritem" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/callrecord" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/config" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/device" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/deviceinfo" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/devicestateinfo" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/eventrecurrencetypes" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/message" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/messaging" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/messagequantities" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/messagetypes" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/multimedia" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/powerinfo" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/positioninfo" required="false"/>
	<feature name="http://jil.org/jil/api/1.1/widget" required="false"/>
	
	<feature name="http://jil.org/jil/api/1.1.1/datanetworkinfo" required="false"/>
	<feature name="http://jil.org/jil/api/1.1.1/file" required="false"/>
	<feature name="http://jil.org/jil/api/1.1.1/radioinfo" required="false"/>
	<feature name="http://jil.org/jil/api/1.1.1/pim" required="false"/>
	<feature name="http://jil.org/jil/api/1.1.1/telephony" required="false"/>
	<feature name="http://jil.org/jil/api/1.1.1/callrecordtypes" required="false"/>
	<feature name="http://jil.org/jil/api/1.1.1/widgetmanager" required="false"/>
	
	<feature name="http://jil.org/jil/api/1.1.2/camera" required="false"/>
	<feature name="http://jil.org/jil/api/1.1.2/videoplayer" required="false"/>

	<feature name="http://jil.org/jil/api/1.1.4/messagefoldertypes" required="false"/>

	<feature name="http://jil.org/jil/api/1.1.5/applicationtypes" required="false"/>
	<feature name="http://jil.org/jil/api/1.1.5/exception" required="false"/>
	<feature name="http://jil.org/jil/api/1.1.5/exceptiontypes" required="false"/>
	<feature name="http://jil.org/jil/api/1.1.5/radiosignalsourcetypes" required="false"/>
	
	<access network="true" localfs="true"/> <!-- until JIL 1.1 this was enough -->
	<jil:access network="true" localfs="true" remote_scripts="true"/> <!-- this is needed for JIL1.2 -->
	<!--<update href="http://www.jil.org/widgets/" period="1"/>	-->
</widget>
