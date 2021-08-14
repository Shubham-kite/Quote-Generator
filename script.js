
function generator()
{
    dict=
    {
        'author':['“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”',
        '“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”',
        '“Maybe some women arent meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them"',
        '“Man cannot be freed by the same injustice that enslaved it.”',
        '“She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky.”'],
        'quote':['Jules Renard','Albert Einstein','Carrie Bradshaw','Pierce Brow','Monique Duval']
    }
    let num = Math.floor(Math.random()*5)
    document.getElementById("containt").innerHTML = dict.author[num] + ' -' + dict.quote[num]
}