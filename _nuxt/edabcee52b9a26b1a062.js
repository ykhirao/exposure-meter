(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{176:function(e,t,n){var o;!function(r){"use strict";function c(e,t,n){var o,img=document.createElement("img");return img.onerror=function(o){return c.onerror(img,o,e,t,n)},img.onload=function(o){return c.onload(img,o,e,t,n)},"string"==typeof e?(c.fetchBlob(e,(function(t){t?(e=t,o=c.createObjectURL(e)):(o=e,n&&n.crossOrigin&&(img.crossOrigin=n.crossOrigin)),img.src=o}),n),img):c.isInstanceOf("Blob",e)||c.isInstanceOf("File",e)?(o=img._objectURL=c.createObjectURL(e))?(img.src=o,img):c.readFile(e,(function(e){var n=e.target;n&&n.result?img.src=n.result:t&&t(e)})):void 0}var l=r.createObjectURL&&r||r.URL&&URL.revokeObjectURL&&URL||r.webkitURL&&webkitURL;function f(img,e){!img._objectURL||e&&e.noRevoke||(c.revokeObjectURL(img._objectURL),delete img._objectURL)}c.fetchBlob=function(e,t){t()},c.isInstanceOf=function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},c.transform=function(img,e,t,n,data){t(img,data)},c.onerror=function(img,e,t,n,o){f(img,o),n&&n.call(img,e)},c.onload=function(img,e,t,n,o){f(img,o),n&&c.transform(img,o,n,t,{originalWidth:img.naturalWidth||img.width,originalHeight:img.naturalHeight||img.height})},c.createObjectURL=function(e){return!!l&&l.createObjectURL(e)},c.revokeObjectURL=function(e){return!!l&&l.revokeObjectURL(e)},c.readFile=function(e,t,n){if(r.FileReader){var o=new FileReader;if(o.onload=o.onerror=t,o[n=n||"readAsDataURL"])return o[n](e),o}return!1},void 0===(o=function(){return c}.call(t,n,t,e))||(e.exports=o)}("undefined"!=typeof window&&window||this)},177:function(e,t,n){var o,r,c;!function(l){"use strict";r=[n(176)],void 0===(c="function"==typeof(o=function(e){var t="undefined"!=typeof Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);e.blobSlice=t&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},e.metaDataParsers={jpeg:{65505:[],65517:[]}},e.parseMetaData=function(t,n,o,data){data=data||{};var r=this,c=(o=o||{}).maxMetaDataSize||262144;!!("undefined"!=typeof DataView&&t&&t.size>=12&&"image/jpeg"===t.type&&e.blobSlice)&&e.readFile(e.blobSlice.call(t,0,c),(function(t){if(t.target.error)return console.log(t.target.error),void n(data);var c,l,f,i,d=t.target.result,h=new DataView(d),m=2,S=h.byteLength-4,y=m;if(65496===h.getUint16(0)){for(;m<S&&((c=h.getUint16(m))>=65504&&c<=65519||65534===c);){if(m+(l=h.getUint16(m+2)+2)>h.byteLength){console.log("Invalid meta data: Invalid segment size.");break}if(f=e.metaDataParsers.jpeg[c])for(i=0;i<f.length;i+=1)f[i].call(r,h,m,l,data,o);y=m+=l}!o.disableImageHead&&y>6&&(d.slice?data.imageHead=d.slice(0,y):data.imageHead=new Uint8Array(d).subarray(0,y))}else console.log("Invalid JPEG file: Missing JPEG marker.");n(data)}),"readAsArrayBuffer")||n(data)},e.hasMetaOption=function(e){return e&&e.meta};var n=e.transform;e.transform=function(img,t,o,r,data){e.hasMetaOption(t)?e.parseMetaData(r,(function(data){n.call(e,img,t,o,r,data)}),t,data):n.apply(e,arguments)}})?o.apply(t,r):o)||(e.exports=c)}()},182:function(e,t,n){var o=n(7);o(o.S,"Math",{log2:function(e){return Math.log(e)/Math.LN2}})},183:function(e,t,n){var o,r,c;!function(l){"use strict";r=[n(176)],void 0===(c="function"==typeof(o=function(e){var t=e.transform;e.transform=function(img,n,o,r,data){t.call(e,e.scale(img,n,data),n,o,r,data)},e.transformCoordinates=function(){},e.getTransformedOptions=function(img,e){var t,i,n,o,r=e.aspectRatio;if(!r)return e;for(i in t={},e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.crop=!0,(n=img.naturalWidth||img.width)/(o=img.naturalHeight||img.height)>r?(t.maxWidth=o*r,t.maxHeight=o):(t.maxWidth=n,t.maxHeight=n/r),t},e.renderImageToCanvas=function(canvas,img,e,t,n,o,r,c,l,f){return canvas.getContext("2d").drawImage(img,e,t,n,o,r,c,l,f),canvas},e.hasCanvasOption=function(e){return e.canvas||e.crop||!!e.aspectRatio},e.scale=function(img,t,data){t=t||{};var n,o,r,c,l,f,d,h,m,S,y,canvas=document.createElement("canvas"),v=img.getContext||e.hasCanvasOption(t)&&canvas.getContext,x=img.naturalWidth||img.width,C=img.naturalHeight||img.height,P=x,I=C;function w(){var e=Math.max((r||P)/P,(c||I)/I);e>1&&(P*=e,I*=e)}function D(){var e=Math.min((n||P)/P,(o||I)/I);e<1&&(P*=e,I*=e)}if(v&&(d=(t=e.getTransformedOptions(img,t,data)).left||0,h=t.top||0,t.sourceWidth?(l=t.sourceWidth,void 0!==t.right&&void 0===t.left&&(d=x-l-t.right)):l=x-d-(t.right||0),t.sourceHeight?(f=t.sourceHeight,void 0!==t.bottom&&void 0===t.top&&(h=C-f-t.bottom)):f=C-h-(t.bottom||0),P=l,I=f),n=t.maxWidth,o=t.maxHeight,r=t.minWidth,c=t.minHeight,v&&n&&o&&t.crop?(P=n,I=o,(y=l/f-n/o)<0?(f=o*l/n,void 0===t.top&&void 0===t.bottom&&(h=(C-f)/2)):y>0&&(l=n*f/o,void 0===t.left&&void 0===t.right&&(d=(x-l)/2))):((t.contain||t.cover)&&(r=n=n||r,c=o=o||c),t.cover?(D(),w()):(w(),D())),v){if((m=t.pixelRatio)>1&&(canvas.style.width=P+"px",canvas.style.height=I+"px",P*=m,I*=m,canvas.getContext("2d").scale(m,m)),(S=t.downsamplingRatio)>0&&S<1&&P<l&&I<f)for(;l*S>P;)canvas.width=l*S,canvas.height=f*S,e.renderImageToCanvas(canvas,img,d,h,l,f,0,0,canvas.width,canvas.height),d=0,h=0,l=canvas.width,f=canvas.height,(img=document.createElement("canvas")).width=l,img.height=f,e.renderImageToCanvas(img,canvas,0,0,l,f,0,0,l,f);return canvas.width=P,canvas.height=I,e.transformCoordinates(canvas,t),e.renderImageToCanvas(canvas,img,d,h,l,f,0,0,P,I)}return img.width=P,img.height=I,img}})?o.apply(t,r):o)||(e.exports=c)}()},184:function(e,t,n){var o,r,c;!function(l){"use strict";r=[n(176),n(177)],void 0===(c="function"==typeof(o=function(e){e.ExifMap=function(){return this},e.ExifMap.prototype.map={Orientation:274},e.ExifMap.prototype.get=function(e){return this[e]||this[this.map[e]]},e.getExifThumbnail=function(t,n,o){if(o&&!(n+o>t.byteLength))return e.createObjectURL(new Blob([t.buffer.slice(n,n+o)]));console.log("Invalid Exif data: Invalid thumbnail data.")},e.exifTagTypes={1:{getValue:function(e,t){return e.getUint8(t)},size:1},2:{getValue:function(e,t){return String.fromCharCode(e.getUint8(t))},size:1,ascii:!0},3:{getValue:function(e,t,n){return e.getUint16(t,n)},size:2},4:{getValue:function(e,t,n){return e.getUint32(t,n)},size:4},5:{getValue:function(e,t,n){return e.getUint32(t,n)/e.getUint32(t+4,n)},size:8},9:{getValue:function(e,t,n){return e.getInt32(t,n)},size:4},10:{getValue:function(e,t,n){return e.getInt32(t,n)/e.getInt32(t+4,n)},size:8}},e.exifTagTypes[7]=e.exifTagTypes[1],e.getExifValue=function(t,n,o,r,c,l){var f,d,h,i,m,S,y=e.exifTagTypes[r];if(y){if(!((d=(f=y.size*c)>4?n+t.getUint32(o+8,l):o+8)+f>t.byteLength)){if(1===c)return y.getValue(t,d,l);for(h=[],i=0;i<c;i+=1)h[i]=y.getValue(t,d+i*y.size,l);if(y.ascii){for(m="",i=0;i<h.length&&"\0"!==(S=h[i]);i+=1)m+=S;return m}return h}console.log("Invalid Exif data: Invalid data offset.")}else console.log("Invalid Exif data: Invalid tag type.")},e.parseExifTag=function(t,n,o,r,data){var c=t.getUint16(o,r);data.exif[c]=e.getExifValue(t,n,o,t.getUint16(o+2,r),t.getUint32(o+4,r),r)},e.parseExifTags=function(e,t,n,o,data){var r,c,i;if(n+6>e.byteLength)console.log("Invalid Exif data: Invalid directory offset.");else{if(!((c=n+2+12*(r=e.getUint16(n,o)))+4>e.byteLength)){for(i=0;i<r;i+=1)this.parseExifTag(e,t,n+2+12*i,o,data);return e.getUint32(c,o)}console.log("Invalid Exif data: Invalid directory size.")}},e.parseExifData=function(t,n,o,data,r){if(!r.disableExif){var c,l,f,d=n+10;if(1165519206===t.getUint32(n+4))if(d+8>t.byteLength)console.log("Invalid Exif data: Invalid segment size.");else if(0===t.getUint16(n+8)){switch(t.getUint16(d)){case 18761:c=!0;break;case 19789:c=!1;break;default:return void console.log("Invalid Exif data: Invalid byte alignment marker.")}42===t.getUint16(d+2,c)?(l=t.getUint32(d+4,c),data.exif=new e.ExifMap,(l=e.parseExifTags(t,d,d+l,c,data))&&!r.disableExifThumbnail&&(f={exif:{}},l=e.parseExifTags(t,d,d+l,c,f),f.exif[513]&&(data.exif.Thumbnail=e.getExifThumbnail(t,d+f.exif[513],f.exif[514]))),data.exif[34665]&&!r.disableExifSub&&e.parseExifTags(t,d,d+data.exif[34665],c,data),data.exif[34853]&&!r.disableExifGps&&e.parseExifTags(t,d,d+data.exif[34853],c,data)):console.log("Invalid Exif data: Missing TIFF marker.")}else console.log("Invalid Exif data: Missing byte alignment offset.")}},e.metaDataParsers.jpeg[65505].push(e.parseExifData)})?o.apply(t,r):o)||(e.exports=c)}()},185:function(e,t,n){var o,r,c;!function(l){"use strict";r=[n(176),n(177)],void 0===(c="function"==typeof(o=function(e){e.IptcMap=function(){return this},e.IptcMap.prototype.map={ObjectName:5},e.IptcMap.prototype.get=function(e){return this[e]||this[this.map[e]]},e.parseIptcTags=function(e,t,n,data){function o(e,t,n){for(var o="",r=t;r<t+n;r++)o+=String.fromCharCode(e.getUint8(r));return o}for(var r,c,l,f=t;f<t+n;)28===e.getUint8(f)&&2===e.getUint8(f+1)&&(l=e.getUint8(f+2))in data.iptc.tags&&(c=e.getInt16(f+3),r=o(e,f+5,c),Object.prototype.hasOwnProperty.call(data.iptc,l)?data.iptc[l]instanceof Array?data.iptc[l].push(r):data.iptc[l]=[data.iptc[l],r]:data.iptc[l]=r),f++},e.parseIptcData=function(t,n,o,data,r){if(!r.disableIptc){for(var c=n+o,l=function(e,t){return 943868237===e.getUint32(t)&&1028===e.getUint16(t+4)};n+8<c;){if(l(t,n)){var f=t.getUint8(n+7);f%2!=0&&(f+=1),0===f&&(f=4);var d=n+8+f;if(d>c){console.log("Invalid IPTC data: Invalid segment offset.");break}var h=t.getUint16(n+6+f);if(n+h>c){console.log("Invalid IPTC data: Invalid segment size.");break}return data.iptc=new e.IptcMap,e.parseIptcTags(t,d,h,data)}n++}console.log("No IPTC data at this offset - could be XMP")}},e.metaDataParsers.jpeg[65517].push(e.parseIptcData)})?o.apply(t,r):o)||(e.exports=c)}()},188:function(e,t,n){var o=n(7);o(o.S,"Math",{sign:n(189)})},189:function(e,t){e.exports=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1}},194:function(e,t,n){e.exports=n(176),n(183),n(177),n(195),n(184),n(196),n(185),n(197),n(198)},195:function(e,t,n){var o,r,c;!function(l){"use strict";r=[n(176),n(177)],void 0===(c="function"==typeof(o=function(e){"undefined"!=typeof fetch&&"undefined"!=typeof Request&&(e.fetchBlob=function(t,n,o){if(e.hasMetaOption(o))return fetch(new Request(t,o)).then((function(e){return e.blob()})).then(n).catch((function(e){console.log(e),n()}));n()})})?o.apply(t,r):o)||(e.exports=c)}()},196:function(e,t,n){var o,r,c;!function(l){"use strict";r=[n(176),n(184)],void 0===(c="function"==typeof(o=function(e){e.ExifMap.prototype.tags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright",36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",42240:"Gamma",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"PhotographicSensitivity",34856:"OECF",34864:"SensitivityType",34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRatio",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42016:"ImageUniqueID",42032:"CameraOwnerName",42033:"BodySerialNumber",42034:"LensSpecification",42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber",0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential",31:"GPSHPositioningError"},e.ExifMap.prototype.stringValues={ExposureProgram:{0:"Undefined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Undefined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},ComponentsConfiguration:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"},Orientation:{1:"top-left",2:"top-right",3:"bottom-right",4:"bottom-left",5:"left-top",6:"right-top",7:"right-bottom",8:"left-bottom"}},e.ExifMap.prototype.getText=function(e){var t=this.get(e);switch(e){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":case"Orientation":return this.stringValues[e][t];case"ExifVersion":case"FlashpixVersion":if(!t)return;return String.fromCharCode(t[0],t[1],t[2],t[3]);case"ComponentsConfiguration":if(!t)return;return this.stringValues[e][t[0]]+this.stringValues[e][t[1]]+this.stringValues[e][t[2]]+this.stringValues[e][t[3]];case"GPSVersionID":if(!t)return;return t[0]+"."+t[1]+"."+t[2]+"."+t[3]}return String(t)},function(e){var t,n=e.tags,map=e.map;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(map[n[t]]=t)}(e.ExifMap.prototype),e.ExifMap.prototype.getAll=function(){var e,t,map={};for(e in this)Object.prototype.hasOwnProperty.call(this,e)&&(t=this.tags[e])&&(map[t]=this.getText(t));return map}})?o.apply(t,r):o)||(e.exports=c)}()},197:function(e,t,n){var o,r,c;!function(l){"use strict";r=[n(176),n(185)],void 0===(c="function"==typeof(o=function(e){e.IptcMap.prototype.tags={3:"ObjectType",4:"ObjectAttribute",5:"ObjectName",7:"EditStatus",8:"EditorialUpdate",10:"Urgency",12:"SubjectRef",15:"Category",20:"SupplCategory",22:"FixtureID",25:"Keywords",26:"ContentLocCode",27:"ContentLocName",30:"ReleaseDate",35:"ReleaseTime",37:"ExpirationDate",38:"ExpirationTime",40:"SpecialInstructions",42:"ActionAdvised",45:"RefService",47:"RefDate",50:"RefNumber",55:"DateCreated",60:"TimeCreated",62:"DigitalCreationDate",63:"DigitalCreationTime",65:"OriginatingProgram",70:"ProgramVersion",75:"ObjectCycle",80:"Byline",85:"BylineTitle",90:"City",92:"Sublocation",95:"State",100:"CountryCode",101:"CountryName",103:"OrigTransRef",105:"Headline",110:"Credit",115:"Source",116:"CopyrightNotice",118:"Contact",120:"Caption",122:"WriterEditor",130:"ImageType",131:"ImageOrientation",135:"LanguageID"},e.IptcMap.prototype.getText=function(e){var t=this.get(e);return String(t)},function(e){var t,n=e.tags,map=e.map||{};for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(map[n[t]]=t)}(e.IptcMap.prototype),e.IptcMap.prototype.getAll=function(){var e,t,map={};for(e in this)Object.prototype.hasOwnProperty.call(this,e)&&(t=this.tags[e])&&(map[t]=this.getText(t));return map}})?o.apply(t,r):o)||(e.exports=c)}()},198:function(e,t,n){var o,r,c;!function(l){"use strict";r=[n(176),n(183),n(177)],void 0===(c="function"==typeof(o=function(e){var t=e.hasCanvasOption,n=e.hasMetaOption,o=e.transformCoordinates,r=e.getTransformedOptions;e.hasCanvasOption=function(n){return!!n.orientation||t.call(e,n)},e.hasMetaOption=function(t){return t&&!0===t.orientation||n.call(e,t)},e.transformCoordinates=function(canvas,t){o.call(e,canvas,t);var n=canvas.getContext("2d"),r=canvas.width,c=canvas.height,l=canvas.style.width,f=canvas.style.height,d=t.orientation;if(d&&!(d>8))switch(d>4&&(canvas.width=c,canvas.height=r,canvas.style.width=f,canvas.style.height=l),d){case 2:n.translate(r,0),n.scale(-1,1);break;case 3:n.translate(r,c),n.rotate(Math.PI);break;case 4:n.translate(0,c),n.scale(1,-1);break;case 5:n.rotate(.5*Math.PI),n.scale(1,-1);break;case 6:n.rotate(.5*Math.PI),n.translate(0,-c);break;case 7:n.rotate(.5*Math.PI),n.translate(r,-c),n.scale(-1,1);break;case 8:n.rotate(-.5*Math.PI),n.translate(-r,0)}},e.getTransformedOptions=function(img,t,data){var n,i,o=r.call(e,img,t),c=o.orientation;if(!0===c&&data&&data.exif&&(c=data.exif.get("Orientation")),!c||c>8||1===c)return o;for(i in n={},o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i]);switch(n.orientation=c,c){case 2:n.left=o.right,n.right=o.left;break;case 3:n.left=o.right,n.top=o.bottom,n.right=o.left,n.bottom=o.top;break;case 4:n.top=o.bottom,n.bottom=o.top;break;case 5:n.left=o.top,n.top=o.left,n.right=o.bottom,n.bottom=o.right;break;case 6:n.left=o.top,n.top=o.right,n.right=o.bottom,n.bottom=o.left;break;case 7:n.left=o.bottom,n.top=o.right,n.right=o.top,n.bottom=o.left;break;case 8:n.left=o.bottom,n.top=o.left,n.right=o.top,n.bottom=o.right}return n.orientation>4&&(n.maxWidth=o.maxHeight,n.maxHeight=o.maxWidth,n.minWidth=o.minHeight,n.minHeight=o.minWidth,n.sourceWidth=o.sourceHeight,n.sourceHeight=o.sourceWidth),n}})?o.apply(t,r):o)||(e.exports=c)}()}}]);