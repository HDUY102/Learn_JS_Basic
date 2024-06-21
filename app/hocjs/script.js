const sinhvien=[
    {
        name: "Hau",
        tuoi: 30
    },
    {
        name: "Duong",
        tuoi: 20
    },
    {
        name: "Dieu",
        tuoi: 25
    },
]
//map: having return value
const sinhVienMap = sinhvien.map((sinhvien, index, originalArray)=>{
    console.log("sinhvien ",sinhvien)
    console.log("index ",index)
    console.log("originalArray ",originalArray)
    return sinhvien.tuoi //Return value students (age, name, object students)
})
console.log("sinhVienMap ",sinhVienMap)

//filter: having return value
const sinhVienFilter = sinhvien.filter((sv)=>{
    return sv.tuoi>=25
})
console.log("sinhVienFilter ",sinhVienFilter)

//forEach: no having return value
const svForEach = sinhvien.forEach((sv,index)=>{
    console.log(`Sinh Viên Thứ ${index+1}:`)
    console.log("Tên SV: ", sv.name)
    console.log("Tuổi SV: ",sv.tuoi)
})
//Set: nối các mảng & tránh lặp lại các phần tử trùng nhau
const a=[1,2,4]
const b=[2,1,3]

const useSet = new Set([...a,...b])
console.log("use Set: ",useSet)
//flatMap: phân rã các mảng và nối chúng lại với nhau
console.log([...a,b].flatMap((item)=>{
    return item
}))
//flatMap sẽ trùng với lệnh dưới
// console.log([...a,...b])

//template literals
const variable = 30
console.log(`Biến của varible là ${variable}`)