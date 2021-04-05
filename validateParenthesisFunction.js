function areValidParenthesis(string_1) 
	{

		// This function requires a string of parenthesis which could be [] {} () 
		// and evaluates wether they are or not correctly organized, if not returns false, else true.

		a = '(';
		a1 = ')';
		b = '[';
		b1 = ']';
		c = '{';
		c1 = '}';
		abierto = 0;
		array_1 = string_1.split('');

        if (array_1[0] == a1 || array_1[0] == b1 || array_1[0] == c1)
        {
            return false
        }
       
		for (i = 0; i < array_1.length; i++)
		{
			
			if (array_1[i] == a)
			{
				if (array_1[i+1] == b1 || array_1[i+1] == c1)
				{
					return false
				}
			}
			if (array_1[i] == b)
			{
				if (array_1[i+1] == c1 || array_1[i+1] == a1)
				{
					return false
				}
			}
			if (array_1[i] == c)
			{
				if (array_1[i+1] == b1 || array_1[i+1] == a1)
				{
					return false
				}
			}
            
		}	
        if (array_1.length%2 === 0)
		{
			return true
		}
        else if (array_1.length%2 != 0)
		{
            return false
        }
    }