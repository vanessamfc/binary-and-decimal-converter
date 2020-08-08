export default function validatedBinaryString(binaryString: string){
  let error=false;
  binaryString.split('').forEach(c => {
    if(!(c === '1' || c === '0')) error = true;
  })

  return !error;
}