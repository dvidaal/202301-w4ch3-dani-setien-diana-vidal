# DATA

## DATA LAYER

- phoneNumber ( string )
- isCalling ( boolean )

## DATA MODIFICATIONS

- Add digit to phone number
- Clear phone number

- Set isCalling to true
- Set isCalling to false

# COMPONENTS

## CONTEXT

- Contains phoneNumber
- Contains isCalling

- Contains the function addNumber
- Contains the function clearNumber
- Contains the function call
- Contains the function hangUp

## APP

## INFO

- Receives isCalling from Context

- Shows the isCalling status

## DISPLAY

- Receives phoneNumber from Context

- Shows phoneNumber

## ACTIONS

- Receives isCalling from Context

- Shows either Action component ( conditional rendering )

## ACTION

- Receives phoneNumber from Context ( we add "active" class )

- One of the 'Action' components takes the function to call

- One of the 'Action' components takes the function to hung up

## KEYBOARD

- Receives isCalling from Context ( to deactivate the Keys )

## KEY

- Receives addNumber function from Context

- Receives the addNumber function from Context

- Receives the clearNumber function from Context
