export default function poetry(verse) {
    let result = null
    let PoemArray=['علامت خطر است این قبای خون آلود         هر آنکه در ره هستی است در ره خطریست','بریخت خون من و نوبت تو نیز رسد        بدست رهزن گیتی هماره نیشتریست','خوش است اگر گل امروز خوش بود فردا       ولی میان ز شب تا سحر گهان اگریست' , 'گل از بساط چمن تنگدل نخواهد رفت       بدان دلیل که مهمان شامی و سحریست' ,'میان آتشم و هیچگه نمیسوزم      هماره بر سرم از جور آسمان شرریست','از آن، دراز نکردم سخن درین معنی      که کار زندگی لاله کار مختصریست','کسیکه در طلب نام نیک رنج کشید      گر چه نام و نشانیش نیست، ناموریست ','هنر نمای نبودم بدین هنرمندی       سخن حدیث دگر، کار قصه دگریست','نه هر نسیم که اینجاست بر تو میگذرد       صبا صباست، به هر سبزه و گلش گذریست','دیده را دریا نمودن، مردمک را غوصگر       اشک را مانند مروارید غلطان داشتن'

    ]

    let verseEndWith=verse[verse.length-1]  //find last char of input
    
    result=PoemArray.filter(item=>{
        return item.startsWith(verseEndWith)
    }).join().trim()
    
    //// find last char of fisrt hemistich
    if(result==''){
        let lastHemistich=verse.indexOf('     ')
        verseEndWith=verse[lastHemistich-1]
        
        result=PoemArray.filter(item=>{
            return item.startsWith(verseEndWith)
        }).join().trim()
    }
        
    return result
}    




