
import { useEffect, useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useUsers } from '@/hooks/useUsers';
import { User } from '@/types';

interface UserSelectProps {
    value: string;
    onChange: (userId: string) => void;
    users?: User[]; // Optional pass-through if already fetched, or hook handles it
}

export function UserSelect({ value, onChange }: UserSelectProps) {
    const [open, setOpen] = useState(false);
    const { users, loading } = useUsers();

    const selectedUser = users.find((user) => user.id === value);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[300px] justify-between"
                >
                    {value && selectedUser
                        ? `${selectedUser.account_holder_name || selectedUser.username} (${selectedUser.account_number})`
                        : "Select user..."}
                    {!value && <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <Command>
                    <CommandInput placeholder="Search user..." />
                    <CommandList>
                        <CommandEmpty>No user found.</CommandEmpty>
                        <CommandGroup>
                            {loading ? (
                                <CommandItem>Loading...</CommandItem>
                            ) : (
                                users.map((user) => (
                                    <CommandItem
                                        key={user.id}
                                        value={`${user.account_holder_name || user.username} ${user.account_number}`}
                                        onSelect={() => {
                                            onChange(user.id);
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === user.id ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        <div className="flex flex-col">
                                            <span className="font-medium">{user.account_holder_name || user.username}</span>
                                            <span className="text-xs text-muted-foreground">{user.account_number}</span>
                                        </div>
                                    </CommandItem>
                                ))
                            )}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
