import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  


function AccordPage() {

    const faq = [
        {
            "id":1,
            "question": "Question 1",
            "content": "Text About Question 1"
        },
        {
            "id":2,
            "question": "Question 2",
            "content": "Text About Question 1"
        },
        {
            "id":3,
            "question": "Question 3",
            "content": "Text About Question 1"
        },
        {
            "id":4,
            "question": "Question 4",
            "content": "Text About Question 1"
        },
        {
            "id":5,
            "question": "Question 5",
            "content": "Text About Question 1"
        }
    ]
return (

<div className="flex justify-center items-center flex-col">
    <main className="w-[500px] p-[20px]">
        {
            faq.map(q => <Accordion type="single" collapsible key={q.id}>
                <AccordionItem value="item-1">
                    <AccordionTrigger>{q.question}</AccordionTrigger>
                    <AccordionContent>
                       {q.content}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>)
        }
        

    </main>
    <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>


</div>



)
}

export default AccordPage