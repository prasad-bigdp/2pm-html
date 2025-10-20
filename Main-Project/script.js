// take all the elements
const pencilEle = document.getElementById('pencil')
const EraserEle = document.getElementById('eraser')
const colorEle=  document.getElementById('color')
const clearAllEle = document.getElementById('clearAll');
const saveEle = document.getElementById('savePng')
const canvasEle = document.querySelector('#draw-canvas');
const canvas = new fabric.Canvas(canvasEle, {
    isDrawingMode:true
})
let isDrawingMode = false

let choosen_bgColor = "#ffffff"
canvas.backgroundColor =choosen_bgColor
let currentTool = "pencil"
saveEle.addEventListener('click', function ()
{
    const dataURL = canvasEle.toDataURL({ type: 'png', quality: 1 })
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = true;
    link.click()
})
const bgColor = document.getElementById('bgColor')
bgColor.addEventListener('change', function (e)
{
    console.log(e.target.value);
    choosen_bgColor = e.target.value
canvas.backgroundColor = choosen_bgColor
})
EraserEle.addEventListener('click', function ()
{
    currentTool = "eraser"
    check()
})
function check ()
{
    if (currentTool == "eraser")
    {
        console.log("hiii")
         canvas.freeDrawingBrush = new fabric.EraserBrush(canvasEle)
        canvas.isDrawingMode = true
         canvas.freeDrawingBrush.width = 10
    }
}
document.getElementById("EraserW").addEventListener('change', function ()
{
    
})

clearAllEle.addEventListener('click', () =>
{
    canvas.clear()
})