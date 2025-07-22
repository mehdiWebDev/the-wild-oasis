import supabase from './supabase'
const getCabins = async () => {
    let { data, error } = await supabase
    .from('cabins')
    .select('*')

    if (error) {
        console.error('Error fetching cabins:', error);
        return [];
    }
    return data;
}

export default getCabins;